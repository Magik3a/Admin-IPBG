

namespace AdminIPBG.Default {
    export class PartsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Parts';
    }

    export interface PartsForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PartsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}