
namespace AdminIPBG.Rows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rows.Phases")]
    [BasedOnRow(typeof(Entities.PhasesRow))]
    public class PhasesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PhaseId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}