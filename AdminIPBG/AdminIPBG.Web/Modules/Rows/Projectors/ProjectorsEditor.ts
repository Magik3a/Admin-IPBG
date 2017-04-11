
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    export class ProjectorsEditor extends Common.GridEditorBase<ProjectorsRow> {
        protected getColumnsKey() { return 'Rows.Projectors'; }
        protected getDialogType() { return ProjectorsEditorDialog; }
                protected getLocalTextPrefix() { return ProjectorsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}