
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
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Invoice',
                name: 'Протокол',
                format: ctx => '<a class="inline-action print-invoice" title="Протокол">' +
                    '<i class="fa fa-file-pdf-o text-red"></i> Изтегли</a>',
                width: 76,
                minWidth: 54,
                maxWidth: 76
            });

            columns.splice(columns.length, 0, {
                field: 'InvoiceCode',
                name: 'Код',
                format: ctx => '<span><i class="fa fa-lock"></i> '
                    + ctx.item.InvoiceCode
                    + '</span>',
                width: 176,
                minWidth: 154,
                maxWidth: 176
            });
            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-invoice')) {
                    AdminIPBG.Common.ReportHelper.execute({
                        reportKey: 'Rows.RowsInvoice',
                        params: {
                            RowId: item.RowId
                        }
                    });
                }
            }
        }

       protected getButtons() {
           var buttons = super.getButtons();

           buttons.push(Common.ExcelExportHelper.createToolButton({
               grid: this,
               service: RowsService.baseUrl + '/ListExcel',
               onViewSubmit: () => this.onViewSubmit(),
               separator: true
           }));

           //buttons.push(Common.PdfExportHelper.createToolButton({
           //    grid: this,
           //    onViewSubmit: () => this.onViewSubmit()
           //}));

           return buttons;
       }

    }
}