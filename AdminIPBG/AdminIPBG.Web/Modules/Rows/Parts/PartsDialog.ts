
namespace AdminIPBG.Rows {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PartsDialog extends Serenity.EntityDialog<PartsRow, any> {
        protected getFormKey() { return PartsForm.formKey; }
        protected getIdProperty() { return PartsRow.idProperty; }
        protected getLocalTextPrefix() { return PartsRow.localTextPrefix; }
        protected getNameProperty() { return PartsRow.nameProperty; }
        protected getService() { return PartsService.baseUrl; }

        protected form = new PartsForm(this.idPrefix);

    }
}