
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RowsEditorDialog extends Common.GridEditorDialog<RowsRow> {
        protected getFormKey() { return RowsForm.formKey; }
                protected getLocalTextPrefix() { return RowsRow.localTextPrefix; }
        protected getNameProperty() { return RowsRow.nameProperty; }
        protected form = new RowsForm(this.idPrefix);
    }
}