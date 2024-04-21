using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class CostumerBasketDto
    {
        [Required]
        public string Id { get; set; }
        
        public List<BasketItemDto> Items { get; set; } 
    }
}