
namespace AdminIPBG.Rows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rows.Clients")]
    [BasedOnRow(typeof(Entities.ClientsRow))]
    public class ClientsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ClientsId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}