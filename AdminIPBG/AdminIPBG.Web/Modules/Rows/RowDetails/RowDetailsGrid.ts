
namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class RowDetailsGrid extends Serenity.EntityGrid<RowDetailsRow, any> {
        protected getColumnsKey() { return 'Rows.RowDetails'; }
        protected getDialogType() { return RowDetailsDialog; }
        protected getIdProperty() { return RowDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return RowDetailsRow.localTextPrefix; }
        protected getService() { return RowDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}