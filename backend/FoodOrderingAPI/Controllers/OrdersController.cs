using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodOrderingAPI.Data;
using FoodOrderingAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace FoodOrderingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrdersController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> PlaceOrder(Order order)
        {
            order.OrderDate = DateTime.Now;
            order.Status = "Pending";

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(order);
        }

        [Authorize]
        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserOrders(int userId)
        {
            var orders = await _context.Orders
                .Where(o => o.UserId == userId)
                .ToListAsync();

            if (!orders.Any())
            {
                return NotFound("No orders found");
            }

            return Ok(orders);
        }
    }
}