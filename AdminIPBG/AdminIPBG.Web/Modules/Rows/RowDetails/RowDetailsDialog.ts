
namespace AdminIPBG.Rows {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RowDetailsDialog extends Serenity.EntityDialog<RowDetailsRow, any> {
        protected getFormKey() { return RowDetailsForm.formKey; }
        protected getIdProperty() { return RowDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return RowDetailsRow.localTextPrefix; }
        protected getNameProperty() { return RowDetailsRow.nameProperty; }
        protected getService() { return RowDetailsService.baseUrl; }

        protected form = new RowDetailsForm(this.idPrefix);

    }
}