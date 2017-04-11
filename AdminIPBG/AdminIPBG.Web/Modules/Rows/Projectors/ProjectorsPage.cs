

[assembly:Serenity.Navigation.NavigationLink(1002, "Rows/Projectors", typeof(AdminIPBG.Rows.Pages.ProjectorsController))]

namespace AdminIPBG.Rows.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rows/Projectors"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProjectorsRow))]
    public class ProjectorsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rows/Projectors/ProjectorsIndex.cshtml");
        }
    }
}