
namespace AdminIPBG.Default {
    export interface PhasesRow {
        PhaseId?: number;
        Name?: string;
    }

    export namespace PhasesRow {
        export const idProperty = 'PhaseId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Phases';

        export namespace Fields {
            export declare const PhaseId;
            export declare const Name;
        }

        ['PhaseId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

