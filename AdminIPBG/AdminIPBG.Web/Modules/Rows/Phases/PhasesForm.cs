
namespace AdminIPBG.Rows.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rows.Phases")]
    [BasedOnRow(typeof(Entities.PhasesRow))]
    public class PhasesForm
    {
        public String Name { get; set; }
    }
}