
namespace AdminIPBG.Rows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rows.RowDetails")]
    [BasedOnRow(typeof(Entities.RowDetailsRow))]
    public class RowDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 RowDetailId { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Int32 PartName { get; set; }
        public Int32 Quantity { get; set; }
    }
}