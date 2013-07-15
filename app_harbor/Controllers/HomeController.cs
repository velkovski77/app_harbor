using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace app_harbor.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "My first application on appharbor ";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}
