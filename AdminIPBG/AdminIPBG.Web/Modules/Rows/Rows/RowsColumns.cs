
namespace AdminIPBG.Rows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rows.Rows")]
    [BasedOnRow(typeof(Entities.RowsRow))]
    public class RowsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 RowId { get; set; }

        [LookupEditor(typeof(Entities.ClientsRow)), QuickFilter]
        public Int32 ClientName { get; set; }

        public Int32 ClassifierNumber { get; set; }
        public Int32 Number { get; set; }

        [EditLink, Width(400)]
        public String Object { get; set; }
        public String SubObject { get; set; }

        [EditLink, Width(150)]
        [LookupEditor(typeof(Entities.ProjectorsRow)), QuickFilter]
        public Int32 ProjectorName { get; set; }

        public DateTime Date { get; set; }

        [EditLink, Width(250)]
        [LookupEditor(typeof(Entities.PartsRow)), QuickFilter]
        public Int32 PartName { get; set; }

        [EditLink, Width(100)]
        [LookupEditor(typeof(Entities.PhasesRow)), QuickFilter]
        public Int32 PhaseName { get; set; }
    }
}