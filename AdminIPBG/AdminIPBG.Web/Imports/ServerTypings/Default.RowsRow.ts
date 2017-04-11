
namespace AdminIPBG.Default {
    export interface RowsRow {
        RowId?: number;
        ClientId?: number;
        ClassifierNumber?: number;
        Number?: number;
        Object?: string;
        SubObject?: string;
        ProjectorId?: number;
        Date?: string;
        PartId?: number;
        PhaseId?: number;
        ClientName?: string;
        ProjectorName?: string;
        PartName?: string;
        PhaseName?: string;
    }

    export namespace RowsRow {
        export const idProperty = 'RowId';
        export const nameProperty = 'Object';
        export const localTextPrefix = 'Default.Rows';

        export namespace Fields {
            export declare const RowId;
            export declare const ClientId;
            export declare const ClassifierNumber;
            export declare const Number;
            export declare const Object;
            export declare const SubObject;
            export declare const ProjectorId;
            export declare const Date;
            export declare const PartId;
            export declare const PhaseId;
            export declare const ClientName: string;
            export declare const ProjectorName: string;
            export declare const PartName: string;
            export declare const PhaseName: string;
        }

        ['RowId', 'ClientId', 'ClassifierNumber', 'Number', 'Object', 'SubObject', 'ProjectorId', 'Date', 'PartId', 'PhaseId', 'ClientName', 'ProjectorName', 'PartName', 'PhaseName'].forEach(x => (<any>Fields)[x] = x);
    }
}

