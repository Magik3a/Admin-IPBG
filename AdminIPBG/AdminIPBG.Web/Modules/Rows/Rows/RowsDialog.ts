
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
        private loadedState: string;
        private rowsGrid: RowsGrid;

        constructor() {
            super();
          
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
           // DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }
        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }
    }
}