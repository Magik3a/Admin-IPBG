
namespace AdminIPBG.Rows {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProjectorsDialog extends Serenity.EntityDialog<ProjectorsRow, any> {
        protected getFormKey() { return ProjectorsForm.formKey; }
        protected getIdProperty() { return ProjectorsRow.idProperty; }
        protected getLocalTextPrefix() { return ProjectorsRow.localTextPrefix; }
        protected getNameProperty() { return ProjectorsRow.nameProperty; }
        protected getService() { return ProjectorsService.baseUrl; }

        protected form = new ProjectorsForm(this.idPrefix);

    }
}