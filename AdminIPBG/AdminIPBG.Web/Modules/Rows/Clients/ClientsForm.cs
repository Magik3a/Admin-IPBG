
namespace AdminIPBG.Rows.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rows.Clients")]
    [BasedOnRow(typeof(Entities.ClientsRow))]
    public class ClientsForm
    {
        public String Name { get; set; }
    }
}