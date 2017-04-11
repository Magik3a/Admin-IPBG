
namespace AdminIPBG.Rows {
    export interface PartsRow {
        PartId?: number;
        Name?: string;
    }

    export namespace PartsRow {
        export const idProperty = 'PartId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Rows.Parts';

        export namespace Fields {
            export declare const PartId;
            export declare const Name;
        }

        ['PartId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

