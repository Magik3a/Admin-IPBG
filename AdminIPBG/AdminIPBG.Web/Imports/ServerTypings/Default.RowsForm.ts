

namespace AdminIPBG.Default {
    export class RowsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Rows';
    }

    export interface RowsForm {
        ClientId: Serenity.IntegerEditor;
        ClassifierNumber: Serenity.IntegerEditor;
        Number: Serenity.IntegerEditor;
        Object: Serenity.StringEditor;
        SubObject: Serenity.StringEditor;
        ProjectorId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        PartId: Serenity.IntegerEditor;
        PhaseId: Serenity.IntegerEditor;
    }

    [['ClientId', () => Serenity.IntegerEditor], ['ClassifierNumber', () => Serenity.IntegerEditor], ['Number', () => Serenity.IntegerEditor], ['Object', () => Serenity.StringEditor], ['SubObject', () => Serenity.StringEditor], ['ProjectorId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['PartId', () => Serenity.IntegerEditor], ['PhaseId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(RowsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}