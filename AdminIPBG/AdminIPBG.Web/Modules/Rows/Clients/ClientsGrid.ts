
namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class ClientsGrid extends Serenity.EntityGrid<ClientsRow, any> {
        protected getColumnsKey() { return 'Rows.Clients'; }
        protected getDialogType() { return ClientsDialog; }
        protected getIdProperty() { return ClientsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientsRow.localTextPrefix; }
        protected getService() { return ClientsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}