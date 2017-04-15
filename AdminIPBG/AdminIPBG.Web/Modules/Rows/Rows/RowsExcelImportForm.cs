using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;

namespace AdminIPBG.Modules.Rows.Rows
{
    [FormScript("Rows.RowsExcelImport")]

    public class RowsExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}