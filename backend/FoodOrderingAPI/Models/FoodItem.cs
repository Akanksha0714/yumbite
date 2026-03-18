using System.ComponentModel.DataAnnotations;

namespace FoodOrderingAPI.Models
{
    public class FoodItem
    {
        [Key]
        public int FoodId { get; set; }

        public string FoodName { get; set; }

        public decimal Price { get; set; }

        public string Category { get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }
    }
}