using Microsoft.AspNetCore.Mvc;

namespace hellodotnet.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloController : ControllerBase
{

    [HttpGet]
    public string Get()
    {
        return "Hello!";
    }
}
