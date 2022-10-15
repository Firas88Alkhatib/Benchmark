// use std::env;
// fn main() {
//     let command: Vec<String> = env::args().collect();
//     println!("command line args {:?}", command);
// }

use actix_web::{get, App, HttpServer, Responder};

#[get("/hello")]
async fn greet() -> impl Responder {
    "Hello!"
}

#[actix_web::main] // or #[tokio::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(greet))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
