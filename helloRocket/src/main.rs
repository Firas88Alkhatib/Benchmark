#[macro_use] extern crate rocket;

#[get("/hello")]
fn index() -> &'static str {
    "Hello!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}