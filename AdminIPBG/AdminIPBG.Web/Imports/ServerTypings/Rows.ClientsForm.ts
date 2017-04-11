

namespace AdminIPBG.Rows {
    export class ClientsForm extends Serenity.PrefixedContext {
        static formKey = 'Rows.Clients';
    }

    export interface ClientsForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ClientsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}