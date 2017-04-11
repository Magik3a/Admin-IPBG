
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class RowsEditor extends Common.GridEditorBase<RowsRow> {
        protected getColumnsKey() { return 'Rows.Rows'; }
        protected getDialogType() { return RowsEditorDialog; }
                protected getLocalTextPrefix() { return RowsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}