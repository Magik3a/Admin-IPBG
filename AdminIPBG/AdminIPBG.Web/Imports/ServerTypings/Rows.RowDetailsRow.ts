
namespace AdminIPBG.Rows {
    export interface RowDetailsRow {
        RowDetailId?: number;
        Description?: string;
        Quantity?: number;
        PartId?: number;
        PartName?: string;
    }

    export namespace RowDetailsRow {
        export const idProperty = 'RowDetailId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Rows.RowDetails';

        export namespace Fields {
            export declare const RowDetailId;
            export declare const Description;
            export declare const Quantity;
            export declare const PartId;
            export declare const PartName: string;
        }

        ['RowDetailId', 'Description', 'Quantity', 'PartId', 'PartName'].forEach(x => (<any>Fields)[x] = x);
    }
}

