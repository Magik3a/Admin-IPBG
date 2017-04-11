

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Rows", typeof(AdminIPBG.Rows.Pages.RowsController))]

using System.ComponentModel;

namespace AdminIPBG.Rows.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rows"), Route("{action=index}"), DisplayName("RowsIndex")]
    [PageAuthorize(typeof(Entities.RowsRow))]
    public class RowsController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            return View("~/Modules/Rows/Rows/RowsIndex.cshtml");
        }
    }
}