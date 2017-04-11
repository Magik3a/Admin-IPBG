
namespace AdminIPBG.Rows.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rows.Projectors")]
    [BasedOnRow(typeof(Entities.ProjectorsRow))]
    public class ProjectorsForm
    {
        public String Name { get; set; }
    }
}