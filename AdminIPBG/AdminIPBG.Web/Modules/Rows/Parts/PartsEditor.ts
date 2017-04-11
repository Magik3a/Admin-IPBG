
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class PartsEditor extends Common.GridEditorBase<PartsRow> {
        protected getColumnsKey() { return 'Rows.Parts'; }
        protected getDialogType() { return PartsEditorDialog; }
                protected getLocalTextPrefix() { return PartsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}