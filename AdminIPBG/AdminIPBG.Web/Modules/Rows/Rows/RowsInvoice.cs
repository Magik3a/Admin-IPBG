using AdminIPBG.Administration;

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
    [RequiredPermission(PermissionKeys.Security)]
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
                data.QrCodeBase64 = Convert.ToBase64String(row.QrCodeInvoice, 0, row.QrCodeInvoice.Length);

                data.UserTake = row.PersonTook;
            }
            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
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

        public int ProjectCounts { get; set; }

        public int FoldersCount { get; set; }

        public int TotalCount { get; set; }

        public string QrCodeBase64 { get; set; }
        
    }
}