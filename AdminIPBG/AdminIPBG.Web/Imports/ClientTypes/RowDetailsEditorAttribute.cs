using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;



    namespace AdminIPBG.Rows
    {
        public partial class RowDetailsEditorAttribute : CustomEditorAttribute
        {
            public const string Key = "AdminIPBG.Rows.RowDetailsEditor";

            public RowDetailsEditorAttribute()
                : base(Key)
            {
            }
        }
    }


