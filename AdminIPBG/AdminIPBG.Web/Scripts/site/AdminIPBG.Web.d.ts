/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace AdminIPBG.Administration {
}
declare namespace AdminIPBG.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
}
declare namespace AdminIPBG.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace AdminIPBG.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace AdminIPBG.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace AdminIPBG.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace AdminIPBG.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace AdminIPBG.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace AdminIPBG.Administration {
}
declare namespace AdminIPBG.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace AdminIPBG.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace AdminIPBG.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace AdminIPBG.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace AdminIPBG.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace AdminIPBG.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace AdminIPBG.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Clients {
    class ClientsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ClientsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Clients {
    interface ClientsRow {
        ClientsId?: number;
        Name?: string;
    }
    namespace ClientsRow {
        const idProperty = "ClientsId";
        const nameProperty = "Name";
        const localTextPrefix = "Clients.Clients";
        namespace Fields {
            const ClientsId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Clients {
    namespace ClientsService {
        const baseUrl = "Clients/Clients";
        function Create(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace AdminIPBG.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace AdminIPBG.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace AdminIPBG.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace AdminIPBG.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace AdminIPBG.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace AdminIPBG.Default {
    class ClientsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ClientsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Default {
    interface ClientsRow {
        ClientsId?: number;
        Name?: string;
    }
    namespace ClientsRow {
        const idProperty = "ClientsId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Clients";
        namespace Fields {
            const ClientsId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Default {
    namespace ClientsService {
        const baseUrl = "Default/Clients";
        function Create(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Default {
    class PartsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PartsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Default {
    interface PartsRow {
        PartId?: number;
        Name?: string;
    }
    namespace PartsRow {
        const idProperty = "PartId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Parts";
        namespace Fields {
            const PartId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Default {
    namespace PartsService {
        const baseUrl = "Default/Parts";
        function Create(request: Serenity.SaveRequest<PartsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PartsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PartsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PartsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Default {
    class PhasesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PhasesForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Default {
    interface PhasesRow {
        PhaseId?: number;
        Name?: string;
    }
    namespace PhasesRow {
        const idProperty = "PhaseId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Phases";
        namespace Fields {
            const PhaseId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Default {
    namespace PhasesService {
        const baseUrl = "Default/Phases";
        function Create(request: Serenity.SaveRequest<PhasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PhasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PhasesRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PhasesRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Default {
    class ProjectorsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProjectorsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Default {
    interface ProjectorsRow {
        ProjectorId?: number;
        Name?: string;
    }
    namespace ProjectorsRow {
        const idProperty = "ProjectorId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Projectors";
        namespace Fields {
            const ProjectorId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Default {
    namespace ProjectorsService {
        const baseUrl = "Default/Projectors";
        function Create(request: Serenity.SaveRequest<ProjectorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProjectorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProjectorsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProjectorsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Default {
    class RowsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RowsForm {
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
}
declare namespace AdminIPBG.Default {
    interface RowsRow {
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
    namespace RowsRow {
        const idProperty = "RowId";
        const nameProperty = "Object";
        const localTextPrefix = "Default.Rows";
        namespace Fields {
            const RowId: any;
            const ClientId: any;
            const ClassifierNumber: any;
            const Number: any;
            const Object: any;
            const SubObject: any;
            const ProjectorId: any;
            const Date: any;
            const PartId: any;
            const PhaseId: any;
            const ClientName: string;
            const ProjectorName: string;
            const PartName: string;
            const PhaseName: string;
        }
    }
}
declare namespace AdminIPBG.Default {
    namespace RowsService {
        const baseUrl = "Default/Rows";
        function Create(request: Serenity.SaveRequest<RowsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RowsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RowsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RowsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace AdminIPBG {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace AdminIPBG {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace AdminIPBG {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace AdminIPBG.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace AdminIPBG.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace AdminIPBG.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace AdminIPBG.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace AdminIPBG.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace AdminIPBG.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace AdminIPBG.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace AdminIPBG.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace AdminIPBG.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace AdminIPBG.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace AdminIPBG.Parts {
    class PartsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PartsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Parts {
    interface PartsRow {
        PartId?: number;
        Name?: string;
    }
    namespace PartsRow {
        const idProperty = "PartId";
        const nameProperty = "Name";
        const localTextPrefix = "Parts.Parts";
        function getLookup(): Q.Lookup<PartsRow>;
        namespace Fields {
            const PartId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Parts {
    namespace PartsService {
        const baseUrl = "Parts/Parts";
        function Create(request: Serenity.SaveRequest<PartsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PartsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PartsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PartsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Phases {
    class PhasesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PhasesForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Phases {
    interface PhasesRow {
        PhaseId?: number;
        Name?: string;
    }
    namespace PhasesRow {
        const idProperty = "PhaseId";
        const nameProperty = "Name";
        const localTextPrefix = "Phases.Phases";
        namespace Fields {
            const PhaseId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Phases {
    namespace PhasesService {
        const baseUrl = "Phases/Phases";
        function Create(request: Serenity.SaveRequest<PhasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PhasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PhasesRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PhasesRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Projectors {
    class ProjectorsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProjectorsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Projectors {
    interface ProjectorsRow {
        ProjectorId?: number;
        Name?: string;
    }
    namespace ProjectorsRow {
        const idProperty = "ProjectorId";
        const nameProperty = "Name";
        const localTextPrefix = "Projectors.Projectors";
        namespace Fields {
            const ProjectorId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Projectors {
    namespace ProjectorsService {
        const baseUrl = "Projectors/Projectors";
        function Create(request: Serenity.SaveRequest<ProjectorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProjectorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProjectorsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProjectorsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    class ClientsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ClientsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Rows {
    interface ClientsRow {
        ClientsId?: number;
        Name?: string;
    }
    namespace ClientsRow {
        const idProperty = "ClientsId";
        const nameProperty = "Name";
        const localTextPrefix = "Rows.Clients";
        namespace Fields {
            const ClientsId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Rows {
    namespace ClientsService {
        const baseUrl = "Rows/Clients";
        function Create(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    class PartsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PartsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Rows {
    interface PartsRow {
        PartId?: number;
        Name?: string;
    }
    namespace PartsRow {
        const idProperty = "PartId";
        const nameProperty = "Name";
        const localTextPrefix = "Rows.Parts";
        namespace Fields {
            const PartId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Rows {
    namespace PartsService {
        const baseUrl = "Rows/Parts";
        function Create(request: Serenity.SaveRequest<PartsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PartsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PartsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PartsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    class PhasesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PhasesForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Rows {
    interface PhasesRow {
        PhaseId?: number;
        Name?: string;
    }
    namespace PhasesRow {
        const idProperty = "PhaseId";
        const nameProperty = "Name";
        const localTextPrefix = "Rows.Phases";
        namespace Fields {
            const PhaseId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Rows {
    namespace PhasesService {
        const baseUrl = "Rows/Phases";
        function Create(request: Serenity.SaveRequest<PhasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PhasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PhasesRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PhasesRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    class ProjectorsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProjectorsForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace AdminIPBG.Rows {
    interface ProjectorsRow {
        ProjectorId?: number;
        Name?: string;
    }
    namespace ProjectorsRow {
        const idProperty = "ProjectorId";
        const nameProperty = "Name";
        const localTextPrefix = "Rows.Projectors";
        namespace Fields {
            const ProjectorId: any;
            const Name: any;
        }
    }
}
declare namespace AdminIPBG.Rows {
    namespace ProjectorsService {
        const baseUrl = "Rows/Projectors";
        function Create(request: Serenity.SaveRequest<ProjectorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProjectorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProjectorsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProjectorsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    class RowDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RowDetailsForm {
        Description: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
        PartId: Serenity.IntegerEditor;
    }
}
declare namespace AdminIPBG.Rows {
    interface RowDetailsRow {
        RowDetailId?: number;
        Description?: string;
        Quantity?: number;
        PartId?: number;
        PartName?: string;
    }
    namespace RowDetailsRow {
        const idProperty = "RowDetailId";
        const nameProperty = "Description";
        const localTextPrefix = "Rows.RowDetails";
        namespace Fields {
            const RowDetailId: any;
            const Description: any;
            const Quantity: any;
            const PartId: any;
            const PartName: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    namespace RowDetailsService {
        const baseUrl = "Rows/RowDetails";
        function Create(request: Serenity.SaveRequest<RowDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RowDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RowDetailsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RowDetailsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    class RowsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RowsForm {
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
}
declare namespace AdminIPBG.Rows {
    interface RowsRow {
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
    namespace RowsRow {
        const idProperty = "RowId";
        const nameProperty = "Object";
        const localTextPrefix = "Rows.Rows";
        namespace Fields {
            const RowId: any;
            const ClientId: any;
            const ClassifierNumber: any;
            const Number: any;
            const Object: any;
            const SubObject: any;
            const ProjectorId: any;
            const Date: any;
            const PartId: any;
            const PhaseId: any;
            const ClientName: string;
            const ProjectorName: string;
            const PartName: string;
            const PhaseName: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    namespace RowsService {
        const baseUrl = "Rows/Rows";
        function Create(request: Serenity.SaveRequest<RowsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RowsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RowsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RowsRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
            const ExcelImport: string;
        }
    }
}
declare namespace AdminIPBG.Rows {
    class RowsExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RowsExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
}
declare namespace AdminIPBG.Rows {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Rows.Note";
        namespace Fields {
            const NoteId: string;
            const EntityType: string;
            const EntityId: string;
            const Text: string;
            const InsertUserId: string;
            const InsertDate: string;
            const InsertUserDisplayName: string;
        }
    }
}
declare namespace AdminIPBG {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace AdminIPBG.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace AdminIPBG.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace AdminIPBG.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace AdminIPBG.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace AdminIPBG.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace AdminIPBG.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace AdminIPBG.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace AdminIPBG.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace AdminIPBG.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace AdminIPBG.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        private rolePermissions;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace AdminIPBG.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace AdminIPBG.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace AdminIPBG.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace AdminIPBG {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace AdminIPBG.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace AdminIPBG.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace AdminIPBG.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace AdminIPBG.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace AdminIPBG.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace AdminIPBG.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace AdminIPBG.LanguageList {
    function getValue(): string[][];
}
declare namespace AdminIPBG.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace AdminIPBG.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace AdminIPBG.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace AdminIPBG.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace AdminIPBG.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace AdminIPBG.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace AdminIPBG.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace AdminIPBG.ScriptInitialization {
}
declare namespace AdminIPBG.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace AdminIPBG.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class ClientsDialog extends Serenity.EntityDialog<ClientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ClientsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class ClientsEditor extends Common.GridEditorBase<ClientsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class ClientsEditorDialog extends Common.GridEditorDialog<ClientsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ClientsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class ClientsGrid extends Serenity.EntityGrid<ClientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace AdminIPBG.Rows {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace AdminIPBG.Rows {
    class PartsDialog extends Serenity.EntityDialog<PartsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PartsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class PartsEditor extends Common.GridEditorBase<PartsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PartsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class PartsEditorDialog extends Common.GridEditorDialog<PartsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: PartsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class PartsGrid extends Serenity.EntityGrid<PartsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PartsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class PhasesDialog extends Serenity.EntityDialog<PhasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PhasesForm;
    }
}
declare namespace AdminIPBG.Rows {
    class PhasesEditor extends Common.GridEditorBase<PhasesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PhasesEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class PhasesEditorDialog extends Common.GridEditorDialog<PhasesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: PhasesForm;
    }
}
declare namespace AdminIPBG.Rows {
    class PhasesGrid extends Serenity.EntityGrid<PhasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PhasesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class ProjectorsDialog extends Serenity.EntityDialog<ProjectorsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProjectorsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class ProjectorsEditor extends Common.GridEditorBase<ProjectorsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProjectorsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class ProjectorsEditorDialog extends Common.GridEditorDialog<ProjectorsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ProjectorsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class ProjectorsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace AdminIPBG.Rows {
    class ProjectorsGrid extends Serenity.EntityGrid<ProjectorsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProjectorsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class RowDetailsDialog extends Serenity.EntityDialog<RowDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RowDetailsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class RowDetailsEditor extends Common.GridEditorBase<RowDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RowDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace AdminIPBG.Rows {
    class RowDetailsEditorDialog extends Common.GridEditorDialog<RowDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: RowDetailsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class RowDetailsGrid extends Serenity.EntityGrid<RowDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RowDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class RowsDialog extends Serenity.EntityDialog<RowsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RowsForm;
        private loadedState;
        private rowsGrid;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace AdminIPBG.Rows {
    class RowsEditor extends Common.GridEditorBase<RowsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RowsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace AdminIPBG.Rows {
    class RowsEditorDialog extends Common.GridEditorDialog<RowsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: RowsForm;
    }
}
declare namespace AdminIPBG.Rows {
    class RowsExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getImageUploadEditorOptions(): Serenity.ImageUploadEditorOptions;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace AdminIPBG.Rows {
    class RowsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        SubObject: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace AdminIPBG.Rows {
    class RowsGrid extends Serenity.EntityGrid<RowsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RowsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
