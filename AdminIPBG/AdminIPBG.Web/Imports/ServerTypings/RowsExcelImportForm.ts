namespace AdminIPBG.Rows {
    export class RowsExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'Rows.RowsExcelImport';

    }

    export interface RowsExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    [['FileName', () => Serenity.ImageUploadEditor]].forEach(x => Object.defineProperty(RowsExcelImportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

