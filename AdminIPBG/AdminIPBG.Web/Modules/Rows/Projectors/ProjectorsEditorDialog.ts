
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace AdminIPBG.Rows {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProjectorsEditorDialog extends Common.GridEditorDialog<ProjectorsRow> {
        protected getFormKey() { return ProjectorsForm.formKey; }
                protected getLocalTextPrefix() { return ProjectorsRow.localTextPrefix; }
        protected getNameProperty() { return ProjectorsRow.nameProperty; }
        protected form = new ProjectorsForm(this.idPrefix);
    }
}