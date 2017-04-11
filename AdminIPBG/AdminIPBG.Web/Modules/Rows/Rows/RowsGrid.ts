
namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class RowsGrid extends Serenity.EntityGrid<RowsRow, any> {
        protected getColumnsKey() { return 'Rows.Rows'; }
        protected getDialogType() { return RowsDialog; }
        protected getIdProperty() { return RowsRow.idProperty; }
        protected getLocalTextPrefix() { return RowsRow.localTextPrefix; }
        protected getService() { return RowsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //protected getButtons() {
        //    var buttons = super.getButtons();

        //    buttons.push(Common.ExcelExportHelper.createToolButton({
        //        grid: this,
        //        service: RowsService.baseUrl + '/ListExcel',
        //        onViewSubmit: () => this.onViewSubmit(),
        //        separator: true
        //    }));

        //    buttons.push(Common.PdfExportHelper.createToolButton({
        //        grid: this,
        //        onViewSubmit: () => this.onViewSubmit()
        //    }));

        //    return buttons;
        //}

    }
}