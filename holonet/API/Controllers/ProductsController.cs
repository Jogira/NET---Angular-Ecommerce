using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]

        public string GetProducts()
        {
            return "ALL PRODUCTS";
        }


        [HttpGet("{id}")]
        public string GetPrdocut(int id)
        {
            return "ONE PRODUCT";
        }
    }
}