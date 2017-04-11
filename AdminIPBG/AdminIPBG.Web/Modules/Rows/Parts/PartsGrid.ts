
namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class PartsGrid extends Serenity.EntityGrid<PartsRow, any> {
        protected getColumnsKey() { return 'Rows.Parts'; }
        protected getDialogType() { return PartsDialog; }
        protected getIdProperty() { return PartsRow.idProperty; }
        protected getLocalTextPrefix() { return PartsRow.localTextPrefix; }
        protected getService() { return PartsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}