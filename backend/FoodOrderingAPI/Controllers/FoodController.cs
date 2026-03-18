using FoodOrderingAPI.Data;
using FoodOrderingAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodOrderingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FoodController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<FoodItem>>> GetFoods()
        {
            return await _context.FoodItems.ToListAsync();
        }

      

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<FoodItem>> AddFood(FoodItem food)
        {
            _context.FoodItems.Add(food);
            await _context.SaveChangesAsync();

            return Ok(food);
        }
    }

}