using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Hospital.DNA.Web.Models;

namespace Hospital.DNA.Web.Controllers
{
    public class AnaliseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
