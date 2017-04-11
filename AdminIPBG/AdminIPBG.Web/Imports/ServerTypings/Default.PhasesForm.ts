

namespace AdminIPBG.Default {
    export class PhasesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Phases';
    }

    export interface PhasesForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PhasesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}