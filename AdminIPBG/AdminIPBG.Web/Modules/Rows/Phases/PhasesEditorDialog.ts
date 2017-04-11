
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PhasesEditorDialog extends Common.GridEditorDialog<PhasesRow> {
        protected getFormKey() { return PhasesForm.formKey; }
                protected getLocalTextPrefix() { return PhasesRow.localTextPrefix; }
        protected getNameProperty() { return PhasesRow.nameProperty; }
        protected form = new PhasesForm(this.idPrefix);
    }
}