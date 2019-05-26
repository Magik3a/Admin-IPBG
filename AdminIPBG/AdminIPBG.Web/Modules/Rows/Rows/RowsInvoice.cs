using System.IO;
using AdminIPBG.Administration;
using AdminIPBG.Rows.Repositories;
using AdminIPBG.tools.Utils;
using Serenity.Services;

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

               // var details = connection.List<RowDetailsRow>(s => s.Select("*").Where(new Criteria(RowDetailsRow.Fields.RowId.Name) == this.RowId));

                var details = new RowDetailsRepository().List(connection,
                    new ListRequest {Criteria = new Criteria(RowDetailsRow.Fields.RowId.Name) == this.RowId}).Entities;
                foreach (var rowDetailsRow in details)
                {
                    data.Details.Add(new RowsInvoiceData.RowDetails
                    {
                        Description = rowDetailsRow.Description,
                        PartName = rowDetailsRow.PartName,
                        Quantity = rowDetailsRow.Quantity??0
                    });
                }

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
        public RowsInvoiceData()
        {
            Details = new List<RowDetails>();
        }
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

        public List<RowDetails> Details { get; set; }

        public class RowDetails
        {
            public Int32 RowDetailId { get; set; }
            public String Description { get; set; }
            public String PartName { get; set; }
            public Int32 Quantity { get; set; }
        }
    }
}