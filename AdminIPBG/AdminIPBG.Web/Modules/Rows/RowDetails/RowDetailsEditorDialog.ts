
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RowDetailsEditorDialog extends Common.GridEditorDialog<RowDetailsRow> {
        protected getFormKey() { return RowDetailsForm.formKey; }
                protected getLocalTextPrefix() { return RowDetailsRow.localTextPrefix; }
        protected getNameProperty() { return RowDetailsRow.nameProperty; }
        protected form = new RowDetailsForm(this.idPrefix);
    }
}