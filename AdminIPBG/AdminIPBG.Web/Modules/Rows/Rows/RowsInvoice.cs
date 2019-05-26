using System.IO;
using AdminIPBG.Administration;
using AdminIPBG.tools.Utils;

namespace AdminIPBG.Rows
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Rows.RowsInvoice")]
    [ReportDesign(MVC.Views.Rows.RowsInvoice)]
    [ReadPermission("Rows:Rows:Read")]
    public class RowsInvoice : IReport, ICustomizeHtmlToPdf
    {
        public Int32 RowId { get; set; }

        public object GetData()
        {
            var data = new RowsInvoiceData();

            using (var connection = SqlConnections.NewFor<RowsRow>())
            {
                var o = RowsRow.Fields;
                var row = connection.TryById<RowsRow>(this.RowId, r => r.SelectTableFields());
                var rowForeign = connection.TryById<RowsRow>(this.RowId, r => r.SelectForeignFields(row));
                data.Phase = rowForeign.PhaseName;
                data.Part = rowForeign.PartName;
                data.Client = rowForeign.ClientName;
                data.Object = row.Object;
                data.InvoiceDate = row.Date??DateTime.Now;
                data.InvoiceCode = row.InvoiceCode;
                data.UserGive = row.PersonDelivered;
                var qrCode = QRCodeGeneratorExtend.GenerateQRCode(row.InvoiceCode);
                data.QrCodeBase64 = Convert.ToBase64String(qrCode, 0, qrCode.Length);

                data.UserTake = row.PersonTook;
                data.ProjectCounts = row.ProjectsCount;
                data.FoldersCount = row.FoldersCount;
                data.TotalCount = row.FoldersTotalCount;
            }
            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
             options.MarginLeft = "2cm";
             options.MarginTop = "1cm";

             // Get path of App_Data\Reporting, that is the folder where I have header.html and footer.html files
             string PhisicalPath = Path.Combine(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath,
                 @"App_Data\Reporting\");

             //options.CustomArgs.Add("--header-html");
             //options.CustomArgs.Add(PhisicalPath + "header.html");

             options.CustomArgs.Add("--footer-html");
             options.CustomArgs.Add(PhisicalPath + "FooterInvoice.html");

             options.CustomArgs.Add("--disable-smart-shrinking");


        }
    }

    public class RowsInvoiceData
    {
        public string Object { get; set; }

        public string Part { get; set; }
        public string Phase { get; set; }

        public string Client { get; set; }

        public DateTime InvoiceDate { get; set; }

        public string InvoiceCode { get; set; }

        public string UserTake { get; set; }

        public string UserGive { get; set; }

        public string ProjectCounts { get; set; }

        public string FoldersCount { get; set; }

        public string TotalCount { get; set; }

        public string QrCodeBase64 { get; set; }
        
    }
}