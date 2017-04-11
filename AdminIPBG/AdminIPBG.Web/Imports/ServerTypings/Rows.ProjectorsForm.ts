

namespace AdminIPBG.Rows {
    export class ProjectorsForm extends Serenity.PrefixedContext {
        static formKey = 'Rows.Projectors';
    }

    export interface ProjectorsForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ProjectorsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}