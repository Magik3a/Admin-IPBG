
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ClientsEditorDialog extends Common.GridEditorDialog<ClientsRow> {
        protected getFormKey() { return ClientsForm.formKey; }
                protected getLocalTextPrefix() { return ClientsRow.localTextPrefix; }
        protected getNameProperty() { return ClientsRow.nameProperty; }
        protected form = new ClientsForm(this.idPrefix);
    }
}