
namespace AdminIPBG.Rows.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rows.Rows")]
    [BasedOnRow(typeof(Entities.RowsRow))]
    public class RowsForm
    {
        public Int32 ClientId { get; set; }
        public Int32 ClassifierNumber { get; set; }
        public Int32 Number { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Object { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String SubObject { get; set; }
        public Int32 ProjectorId { get; set; }
        public DateTime Date { get; set; }
        public Int32 PartId { get; set; }
        public Int32 PhaseId { get; set; }

        public List<object> NoteList { get; set; }

        [Category("Invoice Details")]
        public String PersonDelivered { get; set; }

        public String PersonTook { get; set; }

        public String FoldersCount { get; set; }

        public String ProjectsCount { get; set; }

        public String FoldersTotalCount { get; set; }

    }
}