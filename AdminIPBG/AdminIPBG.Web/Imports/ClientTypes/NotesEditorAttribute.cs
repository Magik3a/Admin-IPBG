using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;



    namespace AdminIPBG.Rows
    {
        public partial class NotesEditorAttribute : CustomEditorAttribute
        {
            public const string Key = "AdminIPBG.Rows.NotesEditor";

            public NotesEditorAttribute()
                : base(Key)
            {
            }
        }
    }


