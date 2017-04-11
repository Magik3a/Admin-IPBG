
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class ClientsEditor extends Common.GridEditorBase<ClientsRow> {
        protected getColumnsKey() { return 'Rows.Clients'; }
        protected getDialogType() { return ClientsEditorDialog; }
                protected getLocalTextPrefix() { return ClientsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}