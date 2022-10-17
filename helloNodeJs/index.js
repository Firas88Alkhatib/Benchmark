import express from "express";
import cluster from "cluster";
import process from "process";

// assuming have 8 CPUs
// 1 CPU for the primary , and the rest for the forks/workers
const numCPUs = 7;

if (cluster.isPrimary) {
  console.log(`Primary started pid: ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker id: ${cluster.worker.id} died`);
  });
} else {
  const app = express();

  app.get("/hello", (req, res) => {
    res.send("Hello!");
  });

  app.listen(8080, () => {
    console.log(`App started in worker pid: ${process.pid} id: ${cluster.worker.id}`);
  });
}
