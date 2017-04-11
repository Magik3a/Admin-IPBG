
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class PhasesEditor extends Common.GridEditorBase<PhasesRow> {
        protected getColumnsKey() { return 'Rows.Phases'; }
        protected getDialogType() { return PhasesEditorDialog; }
                protected getLocalTextPrefix() { return PhasesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}