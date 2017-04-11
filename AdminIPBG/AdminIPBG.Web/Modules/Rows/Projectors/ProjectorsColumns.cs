
namespace AdminIPBG.Rows.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rows.Projectors")]
    [BasedOnRow(typeof(Entities.ProjectorsRow))]
    public class ProjectorsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProjectorId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}