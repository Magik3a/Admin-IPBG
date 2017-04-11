
namespace AdminIPBG.Rows {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ClientsDialog extends Serenity.EntityDialog<ClientsRow, any> {
        protected getFormKey() { return ClientsForm.formKey; }
        protected getIdProperty() { return ClientsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientsRow.localTextPrefix; }
        protected getNameProperty() { return ClientsRow.nameProperty; }
        protected getService() { return ClientsService.baseUrl; }

        protected form = new ClientsForm(this.idPrefix);

    }
}