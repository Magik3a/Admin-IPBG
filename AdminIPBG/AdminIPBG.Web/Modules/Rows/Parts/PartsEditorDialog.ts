
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PartsEditorDialog extends Common.GridEditorDialog<PartsRow> {
        protected getFormKey() { return PartsForm.formKey; }
                protected getLocalTextPrefix() { return PartsRow.localTextPrefix; }
        protected getNameProperty() { return PartsRow.nameProperty; }
        protected form = new PartsForm(this.idPrefix);
    }
}