using DatabaseAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DatabaseAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PlantsController : ControllerBase
    {
        private readonly PlantContext _context;
        public PlantsController(PlantContext context){

            _context = context;

            _context.Database.EnsureCreated();
        }

        [HttpGet]
        public IActionResult GetAllPlants(){
            return Ok(_context.Plants.ToArray());
        }
    }
}
