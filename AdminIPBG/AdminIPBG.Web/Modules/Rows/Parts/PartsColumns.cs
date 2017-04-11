
namespace AdminIPBG.Rows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rows.Parts")]
    [BasedOnRow(typeof(Entities.PartsRow))]
    public class PartsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PartId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}