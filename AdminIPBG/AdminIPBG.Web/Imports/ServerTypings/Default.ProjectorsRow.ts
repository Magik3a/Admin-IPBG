
namespace AdminIPBG.Default {
    export interface ProjectorsRow {
        ProjectorId?: number;
        Name?: string;
    }

    export namespace ProjectorsRow {
        export const idProperty = 'ProjectorId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Projectors';

        export namespace Fields {
            export declare const ProjectorId;
            export declare const Name;
        }

        ['ProjectorId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

