
namespace AdminIPBG.Rows {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RowsDialog extends Serenity.EntityDialog<RowsRow, any> {
        protected getFormKey() { return RowsForm.formKey; }
        protected getIdProperty() { return RowsRow.idProperty; }
        protected getLocalTextPrefix() { return RowsRow.localTextPrefix; }
        protected getNameProperty() { return RowsRow.nameProperty; }
        protected getService() { return RowsService.baseUrl; }

        protected form = new RowsForm(this.idPrefix);

    }
}