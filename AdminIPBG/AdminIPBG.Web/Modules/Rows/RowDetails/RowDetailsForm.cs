
namespace AdminIPBG.Rows.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rows.RowDetails")]
    [BasedOnRow(typeof(Entities.RowDetailsRow))]
    public class RowDetailsForm
    {
        public String Description { get; set; }
        public Int32 Quantity { get; set; }
        public Int32 PartId { get; set; }
    }
}