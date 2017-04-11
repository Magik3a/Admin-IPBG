
namespace AdminIPBG.Rows {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PhasesDialog extends Serenity.EntityDialog<PhasesRow, any> {
        protected getFormKey() { return PhasesForm.formKey; }
        protected getIdProperty() { return PhasesRow.idProperty; }
        protected getLocalTextPrefix() { return PhasesRow.localTextPrefix; }
        protected getNameProperty() { return PhasesRow.nameProperty; }
        protected getService() { return PhasesService.baseUrl; }

        protected form = new PhasesForm(this.idPrefix);

    }
}