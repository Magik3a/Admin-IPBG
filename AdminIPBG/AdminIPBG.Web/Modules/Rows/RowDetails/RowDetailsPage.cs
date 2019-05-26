

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Rows/RowDetails", typeof(AdminIPBG.Rows.Pages.RowDetailsController))]

namespace AdminIPBG.Rows.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rows/RowDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RowDetailsRow))]
    public class RowDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rows/RowDetails/RowDetailsIndex.cshtml");
        }
    }
}