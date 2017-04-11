
namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class ProjectorsGrid extends Serenity.EntityGrid<ProjectorsRow, any> {
        protected getColumnsKey() { return 'Rows.Projectors'; }
        protected getDialogType() { return ProjectorsDialog; }
        protected getIdProperty() { return ProjectorsRow.idProperty; }
        protected getLocalTextPrefix() { return ProjectorsRow.localTextPrefix; }
        protected getService() { return ProjectorsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}