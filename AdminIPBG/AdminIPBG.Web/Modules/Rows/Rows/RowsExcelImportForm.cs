using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;

namespace AdminIPBG.Modules.Rows.Rows
{
    [FormScript("Rows.RowsExcelImport")]

    public class RowsExcelImportForm
    {
        [DisplayName("Ред на колоните"), ReadOnly(true), DefaultValue("|Id|Възложител|Кл.|Ном.|Обект|Подобект|Проектант|Дата|Част|Фаза|Бр.Папки|")]
        public String Format { get; set; }

        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}