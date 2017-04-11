

[assembly:Serenity.Navigation.NavigationLink(1004, "Rows/Phases", typeof(AdminIPBG.Rows.Pages.PhasesController))]

namespace AdminIPBG.Rows.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rows/Phases"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PhasesRow))]
    public class PhasesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rows/Phases/PhasesIndex.cshtml");
        }
    }
}