
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class RowDetailsEditor extends Common.GridEditorBase<RowDetailsRow> {
        protected getColumnsKey() { return 'Rows.RowDetails'; }
        protected getDialogType() { return RowDetailsEditorDialog; }
                protected getLocalTextPrefix() { return RowDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        validateEntity(row, id) {
            row.PartId = Q.toId(row.PartId);

            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('This product is already in order details!');
            //    return false;
            //} 
            var productLookup = Q.getLookup<PartsRow>('Rows.Parts').itemById[row.PartId];

            row.PartName = productLookup.Name;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0);
            //if (row.Quadrature > 0)
            //    row.LineTotal = row.LineTotal * row.Quadrature;

            //row.LineTotal = row.LineTotal - (row.Discount || 0) + (row.AdditionalCosts || 0);
            return true;
        }
    }
}