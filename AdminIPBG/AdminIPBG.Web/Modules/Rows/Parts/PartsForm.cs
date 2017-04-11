
namespace AdminIPBG.Rows.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rows.Parts")]
    [BasedOnRow(typeof(Entities.PartsRow))]
    public class PartsForm
    {
        public String Name { get; set; }
    }
}