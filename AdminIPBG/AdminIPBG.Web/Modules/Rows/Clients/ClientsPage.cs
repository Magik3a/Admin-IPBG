

[assembly:Serenity.Navigation.NavigationLink(1001, "Rows/Clients", typeof(AdminIPBG.Rows.Pages.ClientsController))]

namespace AdminIPBG.Rows.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rows/Clients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ClientsRow))]
    public class ClientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rows/Clients/ClientsIndex.cshtml");
        }
    }
}