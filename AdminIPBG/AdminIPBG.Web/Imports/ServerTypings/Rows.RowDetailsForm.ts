

namespace AdminIPBG.Rows {
    export class RowDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Rows.RowDetails';
    }

    export interface RowDetailsForm {
        Description: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
        PartId: Serenity.IntegerEditor;
    }

    [['Description', () => Serenity.StringEditor], ['Quantity', () => Serenity.IntegerEditor], ['PartId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(RowDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}