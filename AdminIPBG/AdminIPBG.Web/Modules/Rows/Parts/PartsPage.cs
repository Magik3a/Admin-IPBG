

[assembly:Serenity.Navigation.NavigationLink(1003, "Rows/Parts", typeof(AdminIPBG.Rows.Pages.PartsController))]

namespace AdminIPBG.Rows.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rows/Parts"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PartsRow))]
    public class PartsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rows/Parts/PartsIndex.cshtml");
        }
    }
}