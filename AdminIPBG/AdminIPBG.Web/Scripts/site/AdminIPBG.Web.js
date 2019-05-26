var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Clients;
    (function (Clients) {
        var ClientsForm = (function (_super) {
            __extends(ClientsForm, _super);
            function ClientsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClientsForm;
        }(Serenity.PrefixedContext));
        ClientsForm.formKey = 'Clients.Clients';
        Clients.ClientsForm = ClientsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ClientsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clients = AdminIPBG.Clients || (AdminIPBG.Clients = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Clients;
    (function (Clients) {
        var ClientsRow;
        (function (ClientsRow) {
            ClientsRow.idProperty = 'ClientsId';
            ClientsRow.nameProperty = 'Name';
            ClientsRow.localTextPrefix = 'Clients.Clients';
            var Fields;
            (function (Fields) {
            })(Fields = ClientsRow.Fields || (ClientsRow.Fields = {}));
            ['ClientsId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(ClientsRow = Clients.ClientsRow || (Clients.ClientsRow = {}));
    })(Clients = AdminIPBG.Clients || (AdminIPBG.Clients = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Clients;
    (function (Clients) {
        var ClientsService;
        (function (ClientsService) {
            ClientsService.baseUrl = 'Clients/Clients';
            var Methods;
            (function (Methods) {
            })(Methods = ClientsService.Methods || (ClientsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ClientsService[x] = function (r, s, o) { return Q.serviceRequest(ClientsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ClientsService.baseUrl + '/' + x;
            });
        })(ClientsService = Clients.ClientsService || (Clients.ClientsService = {}));
    })(Clients = AdminIPBG.Clients || (AdminIPBG.Clients = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var ClientsForm = (function (_super) {
            __extends(ClientsForm, _super);
            function ClientsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClientsForm;
        }(Serenity.PrefixedContext));
        ClientsForm.formKey = 'Default.Clients';
        Default.ClientsForm = ClientsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ClientsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var ClientsRow;
        (function (ClientsRow) {
            ClientsRow.idProperty = 'ClientsId';
            ClientsRow.nameProperty = 'Name';
            ClientsRow.localTextPrefix = 'Default.Clients';
            var Fields;
            (function (Fields) {
            })(Fields = ClientsRow.Fields || (ClientsRow.Fields = {}));
            ['ClientsId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(ClientsRow = Default.ClientsRow || (Default.ClientsRow = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var ClientsService;
        (function (ClientsService) {
            ClientsService.baseUrl = 'Default/Clients';
            var Methods;
            (function (Methods) {
            })(Methods = ClientsService.Methods || (ClientsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ClientsService[x] = function (r, s, o) { return Q.serviceRequest(ClientsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ClientsService.baseUrl + '/' + x;
            });
        })(ClientsService = Default.ClientsService || (Default.ClientsService = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var PartsForm = (function (_super) {
            __extends(PartsForm, _super);
            function PartsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PartsForm;
        }(Serenity.PrefixedContext));
        PartsForm.formKey = 'Default.Parts';
        Default.PartsForm = PartsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PartsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var PartsRow;
        (function (PartsRow) {
            PartsRow.idProperty = 'PartId';
            PartsRow.nameProperty = 'Name';
            PartsRow.localTextPrefix = 'Default.Parts';
            var Fields;
            (function (Fields) {
            })(Fields = PartsRow.Fields || (PartsRow.Fields = {}));
            ['PartId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(PartsRow = Default.PartsRow || (Default.PartsRow = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var PartsService;
        (function (PartsService) {
            PartsService.baseUrl = 'Default/Parts';
            var Methods;
            (function (Methods) {
            })(Methods = PartsService.Methods || (PartsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PartsService[x] = function (r, s, o) { return Q.serviceRequest(PartsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PartsService.baseUrl + '/' + x;
            });
        })(PartsService = Default.PartsService || (Default.PartsService = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var PhasesForm = (function (_super) {
            __extends(PhasesForm, _super);
            function PhasesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PhasesForm;
        }(Serenity.PrefixedContext));
        PhasesForm.formKey = 'Default.Phases';
        Default.PhasesForm = PhasesForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PhasesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var PhasesRow;
        (function (PhasesRow) {
            PhasesRow.idProperty = 'PhaseId';
            PhasesRow.nameProperty = 'Name';
            PhasesRow.localTextPrefix = 'Default.Phases';
            var Fields;
            (function (Fields) {
            })(Fields = PhasesRow.Fields || (PhasesRow.Fields = {}));
            ['PhaseId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(PhasesRow = Default.PhasesRow || (Default.PhasesRow = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var PhasesService;
        (function (PhasesService) {
            PhasesService.baseUrl = 'Default/Phases';
            var Methods;
            (function (Methods) {
            })(Methods = PhasesService.Methods || (PhasesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PhasesService[x] = function (r, s, o) { return Q.serviceRequest(PhasesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PhasesService.baseUrl + '/' + x;
            });
        })(PhasesService = Default.PhasesService || (Default.PhasesService = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var ProjectorsForm = (function (_super) {
            __extends(ProjectorsForm, _super);
            function ProjectorsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ProjectorsForm;
        }(Serenity.PrefixedContext));
        ProjectorsForm.formKey = 'Default.Projectors';
        Default.ProjectorsForm = ProjectorsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ProjectorsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var ProjectorsRow;
        (function (ProjectorsRow) {
            ProjectorsRow.idProperty = 'ProjectorId';
            ProjectorsRow.nameProperty = 'Name';
            ProjectorsRow.localTextPrefix = 'Default.Projectors';
            var Fields;
            (function (Fields) {
            })(Fields = ProjectorsRow.Fields || (ProjectorsRow.Fields = {}));
            ['ProjectorId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(ProjectorsRow = Default.ProjectorsRow || (Default.ProjectorsRow = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var ProjectorsService;
        (function (ProjectorsService) {
            ProjectorsService.baseUrl = 'Default/Projectors';
            var Methods;
            (function (Methods) {
            })(Methods = ProjectorsService.Methods || (ProjectorsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProjectorsService[x] = function (r, s, o) { return Q.serviceRequest(ProjectorsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProjectorsService.baseUrl + '/' + x;
            });
        })(ProjectorsService = Default.ProjectorsService || (Default.ProjectorsService = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var RowsForm = (function (_super) {
            __extends(RowsForm, _super);
            function RowsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RowsForm;
        }(Serenity.PrefixedContext));
        RowsForm.formKey = 'Default.Rows';
        Default.RowsForm = RowsForm;
        [['ClientId', function () { return Serenity.IntegerEditor; }], ['ClassifierNumber', function () { return Serenity.IntegerEditor; }], ['Number', function () { return Serenity.IntegerEditor; }], ['Object', function () { return Serenity.StringEditor; }], ['SubObject', function () { return Serenity.StringEditor; }], ['ProjectorId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['PartId', function () { return Serenity.IntegerEditor; }], ['PhaseId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(RowsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var RowsRow;
        (function (RowsRow) {
            RowsRow.idProperty = 'RowId';
            RowsRow.nameProperty = 'Object';
            RowsRow.localTextPrefix = 'Default.Rows';
            var Fields;
            (function (Fields) {
            })(Fields = RowsRow.Fields || (RowsRow.Fields = {}));
            ['RowId', 'ClientId', 'ClassifierNumber', 'Number', 'Object', 'SubObject', 'ProjectorId', 'Date', 'PartId', 'PhaseId', 'ClientName', 'ProjectorName', 'PartName', 'PhaseName'].forEach(function (x) { return Fields[x] = x; });
        })(RowsRow = Default.RowsRow || (Default.RowsRow = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Default;
    (function (Default) {
        var RowsService;
        (function (RowsService) {
            RowsService.baseUrl = 'Default/Rows';
            var Methods;
            (function (Methods) {
            })(Methods = RowsService.Methods || (RowsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RowsService[x] = function (r, s, o) { return Q.serviceRequest(RowsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RowsService.baseUrl + '/' + x;
            });
        })(RowsService = Default.RowsService || (Default.RowsService = {}));
    })(Default = AdminIPBG.Default || (AdminIPBG.Default = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Parts;
    (function (Parts) {
        var PartsForm = (function (_super) {
            __extends(PartsForm, _super);
            function PartsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PartsForm;
        }(Serenity.PrefixedContext));
        PartsForm.formKey = 'Parts.Parts';
        Parts.PartsForm = PartsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PartsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Parts = AdminIPBG.Parts || (AdminIPBG.Parts = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Parts;
    (function (Parts) {
        var PartsRow;
        (function (PartsRow) {
            PartsRow.idProperty = 'PartId';
            PartsRow.nameProperty = 'Name';
            PartsRow.localTextPrefix = 'Parts.Parts';
            function getLookup() {
                return Q.getLookup('Rows.Parts');
            }
            PartsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PartsRow.Fields || (PartsRow.Fields = {}));
            ['PartId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(PartsRow = Parts.PartsRow || (Parts.PartsRow = {}));
    })(Parts = AdminIPBG.Parts || (AdminIPBG.Parts = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Parts;
    (function (Parts) {
        var PartsService;
        (function (PartsService) {
            PartsService.baseUrl = 'Parts/Parts';
            var Methods;
            (function (Methods) {
            })(Methods = PartsService.Methods || (PartsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PartsService[x] = function (r, s, o) { return Q.serviceRequest(PartsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PartsService.baseUrl + '/' + x;
            });
        })(PartsService = Parts.PartsService || (Parts.PartsService = {}));
    })(Parts = AdminIPBG.Parts || (AdminIPBG.Parts = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Phases;
    (function (Phases) {
        var PhasesForm = (function (_super) {
            __extends(PhasesForm, _super);
            function PhasesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PhasesForm;
        }(Serenity.PrefixedContext));
        PhasesForm.formKey = 'Phases.Phases';
        Phases.PhasesForm = PhasesForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PhasesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Phases = AdminIPBG.Phases || (AdminIPBG.Phases = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Phases;
    (function (Phases) {
        var PhasesRow;
        (function (PhasesRow) {
            PhasesRow.idProperty = 'PhaseId';
            PhasesRow.nameProperty = 'Name';
            PhasesRow.localTextPrefix = 'Phases.Phases';
            var Fields;
            (function (Fields) {
            })(Fields = PhasesRow.Fields || (PhasesRow.Fields = {}));
            ['PhaseId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(PhasesRow = Phases.PhasesRow || (Phases.PhasesRow = {}));
    })(Phases = AdminIPBG.Phases || (AdminIPBG.Phases = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Phases;
    (function (Phases) {
        var PhasesService;
        (function (PhasesService) {
            PhasesService.baseUrl = 'Phases/Phases';
            var Methods;
            (function (Methods) {
            })(Methods = PhasesService.Methods || (PhasesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PhasesService[x] = function (r, s, o) { return Q.serviceRequest(PhasesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PhasesService.baseUrl + '/' + x;
            });
        })(PhasesService = Phases.PhasesService || (Phases.PhasesService = {}));
    })(Phases = AdminIPBG.Phases || (AdminIPBG.Phases = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Projectors;
    (function (Projectors) {
        var ProjectorsForm = (function (_super) {
            __extends(ProjectorsForm, _super);
            function ProjectorsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ProjectorsForm;
        }(Serenity.PrefixedContext));
        ProjectorsForm.formKey = 'Projectors.Projectors';
        Projectors.ProjectorsForm = ProjectorsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ProjectorsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Projectors = AdminIPBG.Projectors || (AdminIPBG.Projectors = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Projectors;
    (function (Projectors) {
        var ProjectorsRow;
        (function (ProjectorsRow) {
            ProjectorsRow.idProperty = 'ProjectorId';
            ProjectorsRow.nameProperty = 'Name';
            ProjectorsRow.localTextPrefix = 'Projectors.Projectors';
            var Fields;
            (function (Fields) {
            })(Fields = ProjectorsRow.Fields || (ProjectorsRow.Fields = {}));
            ['ProjectorId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(ProjectorsRow = Projectors.ProjectorsRow || (Projectors.ProjectorsRow = {}));
    })(Projectors = AdminIPBG.Projectors || (AdminIPBG.Projectors = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Projectors;
    (function (Projectors) {
        var ProjectorsService;
        (function (ProjectorsService) {
            ProjectorsService.baseUrl = 'Projectors/Projectors';
            var Methods;
            (function (Methods) {
            })(Methods = ProjectorsService.Methods || (ProjectorsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProjectorsService[x] = function (r, s, o) { return Q.serviceRequest(ProjectorsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProjectorsService.baseUrl + '/' + x;
            });
        })(ProjectorsService = Projectors.ProjectorsService || (Projectors.ProjectorsService = {}));
    })(Projectors = AdminIPBG.Projectors || (AdminIPBG.Projectors = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ClientsForm = (function (_super) {
            __extends(ClientsForm, _super);
            function ClientsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClientsForm;
        }(Serenity.PrefixedContext));
        ClientsForm.formKey = 'Rows.Clients';
        Rows.ClientsForm = ClientsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ClientsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ClientsRow;
        (function (ClientsRow) {
            ClientsRow.idProperty = 'ClientsId';
            ClientsRow.nameProperty = 'Name';
            ClientsRow.localTextPrefix = 'Rows.Clients';
            var Fields;
            (function (Fields) {
            })(Fields = ClientsRow.Fields || (ClientsRow.Fields = {}));
            ['ClientsId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(ClientsRow = Rows.ClientsRow || (Rows.ClientsRow = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ClientsService;
        (function (ClientsService) {
            ClientsService.baseUrl = 'Rows/Clients';
            var Methods;
            (function (Methods) {
            })(Methods = ClientsService.Methods || (ClientsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ClientsService[x] = function (r, s, o) { return Q.serviceRequest(ClientsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ClientsService.baseUrl + '/' + x;
            });
        })(ClientsService = Rows.ClientsService || (Rows.ClientsService = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PartsForm = (function (_super) {
            __extends(PartsForm, _super);
            function PartsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PartsForm;
        }(Serenity.PrefixedContext));
        PartsForm.formKey = 'Rows.Parts';
        Rows.PartsForm = PartsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PartsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PartsRow;
        (function (PartsRow) {
            PartsRow.idProperty = 'PartId';
            PartsRow.nameProperty = 'Name';
            PartsRow.localTextPrefix = 'Rows.Parts';
            var Fields;
            (function (Fields) {
            })(Fields = PartsRow.Fields || (PartsRow.Fields = {}));
            ['PartId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(PartsRow = Rows.PartsRow || (Rows.PartsRow = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PartsService;
        (function (PartsService) {
            PartsService.baseUrl = 'Rows/Parts';
            var Methods;
            (function (Methods) {
            })(Methods = PartsService.Methods || (PartsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PartsService[x] = function (r, s, o) { return Q.serviceRequest(PartsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PartsService.baseUrl + '/' + x;
            });
        })(PartsService = Rows.PartsService || (Rows.PartsService = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PhasesForm = (function (_super) {
            __extends(PhasesForm, _super);
            function PhasesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PhasesForm;
        }(Serenity.PrefixedContext));
        PhasesForm.formKey = 'Rows.Phases';
        Rows.PhasesForm = PhasesForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PhasesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PhasesRow;
        (function (PhasesRow) {
            PhasesRow.idProperty = 'PhaseId';
            PhasesRow.nameProperty = 'Name';
            PhasesRow.localTextPrefix = 'Rows.Phases';
            var Fields;
            (function (Fields) {
            })(Fields = PhasesRow.Fields || (PhasesRow.Fields = {}));
            ['PhaseId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(PhasesRow = Rows.PhasesRow || (Rows.PhasesRow = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PhasesService;
        (function (PhasesService) {
            PhasesService.baseUrl = 'Rows/Phases';
            var Methods;
            (function (Methods) {
            })(Methods = PhasesService.Methods || (PhasesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PhasesService[x] = function (r, s, o) { return Q.serviceRequest(PhasesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PhasesService.baseUrl + '/' + x;
            });
        })(PhasesService = Rows.PhasesService || (Rows.PhasesService = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ProjectorsForm = (function (_super) {
            __extends(ProjectorsForm, _super);
            function ProjectorsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ProjectorsForm;
        }(Serenity.PrefixedContext));
        ProjectorsForm.formKey = 'Rows.Projectors';
        Rows.ProjectorsForm = ProjectorsForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ProjectorsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ProjectorsRow;
        (function (ProjectorsRow) {
            ProjectorsRow.idProperty = 'ProjectorId';
            ProjectorsRow.nameProperty = 'Name';
            ProjectorsRow.localTextPrefix = 'Rows.Projectors';
            var Fields;
            (function (Fields) {
            })(Fields = ProjectorsRow.Fields || (ProjectorsRow.Fields = {}));
            ['ProjectorId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(ProjectorsRow = Rows.ProjectorsRow || (Rows.ProjectorsRow = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ProjectorsService;
        (function (ProjectorsService) {
            ProjectorsService.baseUrl = 'Rows/Projectors';
            var Methods;
            (function (Methods) {
            })(Methods = ProjectorsService.Methods || (ProjectorsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProjectorsService[x] = function (r, s, o) { return Q.serviceRequest(ProjectorsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProjectorsService.baseUrl + '/' + x;
            });
        })(ProjectorsService = Rows.ProjectorsService || (Rows.ProjectorsService = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowDetailsForm = (function (_super) {
            __extends(RowDetailsForm, _super);
            function RowDetailsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RowDetailsForm;
        }(Serenity.PrefixedContext));
        RowDetailsForm.formKey = 'Rows.RowDetails';
        Rows.RowDetailsForm = RowDetailsForm;
        [['Description', function () { return Serenity.StringEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['PartId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(RowDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowDetailsRow;
        (function (RowDetailsRow) {
            RowDetailsRow.idProperty = 'RowDetailId';
            RowDetailsRow.nameProperty = 'Description';
            RowDetailsRow.localTextPrefix = 'Rows.RowDetails';
            var Fields;
            (function (Fields) {
            })(Fields = RowDetailsRow.Fields || (RowDetailsRow.Fields = {}));
            ['RowDetailId', 'Description', 'Quantity', 'PartId', 'PartName'].forEach(function (x) { return Fields[x] = x; });
        })(RowDetailsRow = Rows.RowDetailsRow || (Rows.RowDetailsRow = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowDetailsService;
        (function (RowDetailsService) {
            RowDetailsService.baseUrl = 'Rows/RowDetails';
            var Methods;
            (function (Methods) {
            })(Methods = RowDetailsService.Methods || (RowDetailsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RowDetailsService[x] = function (r, s, o) { return Q.serviceRequest(RowDetailsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RowDetailsService.baseUrl + '/' + x;
            });
        })(RowDetailsService = Rows.RowDetailsService || (Rows.RowDetailsService = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsForm = (function (_super) {
            __extends(RowsForm, _super);
            function RowsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RowsForm;
        }(Serenity.PrefixedContext));
        RowsForm.formKey = 'Rows.Rows';
        Rows.RowsForm = RowsForm;
        [['ClientId', function () { return Serenity.IntegerEditor; }], ['ClassifierNumber', function () { return Serenity.IntegerEditor; }], ['Number', function () { return Serenity.IntegerEditor; }], ['Object', function () { return Serenity.StringEditor; }], ['SubObject', function () { return Serenity.StringEditor; }], ['ProjectorId', function () { return Serenity.IntegerEditor; }], ['Date', function () { return Serenity.DateEditor; }], ['PartId', function () { return Serenity.IntegerEditor; }], ['PhaseId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(RowsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsRow;
        (function (RowsRow) {
            RowsRow.idProperty = 'RowId';
            RowsRow.nameProperty = 'Object';
            RowsRow.localTextPrefix = 'Rows.Rows';
            var Fields;
            (function (Fields) {
            })(Fields = RowsRow.Fields || (RowsRow.Fields = {}));
            ['RowId', 'ClientId', 'ClassifierNumber', 'Number', 'Object', 'SubObject', 'ProjectorId', 'Date', 'PartId', 'PhaseId', 'ClientName', 'ProjectorName', 'PartName', 'PhaseName'].forEach(function (x) { return Fields[x] = x; });
        })(RowsRow = Rows.RowsRow || (Rows.RowsRow = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsService;
        (function (RowsService) {
            RowsService.baseUrl = 'Rows/Rows';
            var Methods;
            (function (Methods) {
            })(Methods = RowsService.Methods || (RowsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'ExcelImport'].forEach(function (x) {
                RowsService[x] = function (r, s, o) { return Q.serviceRequest(RowsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RowsService.baseUrl + '/' + x;
            });
        })(RowsService = Rows.RowsService || (Rows.RowsService = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsExcelImportForm = (function (_super) {
            __extends(RowsExcelImportForm, _super);
            function RowsExcelImportForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RowsExcelImportForm;
        }(Serenity.PrefixedContext));
        RowsExcelImportForm.formKey = 'Rows.RowsExcelImport';
        Rows.RowsExcelImportForm = RowsExcelImportForm;
        [['FileName', function () { return Serenity.ImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(RowsExcelImportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Rows.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Rows.NoteRow || (Rows.NoteRow = {}));
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = AdminIPBG.Authorization || (AdminIPBG.Authorization = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = AdminIPBG.Administration || (AdminIPBG.Administration = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    AdminIPBG.BasicProgressDialog = BasicProgressDialog;
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new AdminIPBG.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = AdminIPBG.DialogUtils || (AdminIPBG.DialogUtils = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = AdminIPBG.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = AdminIPBG.LanguageList || (AdminIPBG.LanguageList = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('AdminIPBG');
        Serenity.EntityDialog.defaultLanguageList = AdminIPBG.LanguageList.getValue;
    })(ScriptInitialization = AdminIPBG.ScriptInitialization || (AdminIPBG.ScriptInitialization = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = AdminIPBG.Common || (AdminIPBG.Common = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/Scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/Content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            return LoginPanel;
        }(Serenity.PropertyPanel));
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = AdminIPBG.Membership || (AdminIPBG.Membership = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ClientsDialog = (function (_super) {
            __extends(ClientsDialog, _super);
            function ClientsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.ClientsForm(_this.idPrefix);
                return _this;
            }
            ClientsDialog.prototype.getFormKey = function () { return Rows.ClientsForm.formKey; };
            ClientsDialog.prototype.getIdProperty = function () { return Rows.ClientsRow.idProperty; };
            ClientsDialog.prototype.getLocalTextPrefix = function () { return Rows.ClientsRow.localTextPrefix; };
            ClientsDialog.prototype.getNameProperty = function () { return Rows.ClientsRow.nameProperty; };
            ClientsDialog.prototype.getService = function () { return Rows.ClientsService.baseUrl; };
            return ClientsDialog;
        }(Serenity.EntityDialog));
        ClientsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ClientsDialog);
        Rows.ClientsDialog = ClientsDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ClientsEditor = (function (_super) {
            __extends(ClientsEditor, _super);
            function ClientsEditor(container) {
                return _super.call(this, container) || this;
            }
            ClientsEditor.prototype.getColumnsKey = function () { return 'Rows.Clients'; };
            ClientsEditor.prototype.getDialogType = function () { return Rows.ClientsEditorDialog; };
            ClientsEditor.prototype.getLocalTextPrefix = function () { return Rows.ClientsRow.localTextPrefix; };
            return ClientsEditor;
        }(AdminIPBG.Common.GridEditorBase));
        ClientsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], ClientsEditor);
        Rows.ClientsEditor = ClientsEditor;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ClientsEditorDialog = (function (_super) {
            __extends(ClientsEditorDialog, _super);
            function ClientsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.ClientsForm(_this.idPrefix);
                return _this;
            }
            ClientsEditorDialog.prototype.getFormKey = function () { return Rows.ClientsForm.formKey; };
            ClientsEditorDialog.prototype.getLocalTextPrefix = function () { return Rows.ClientsRow.localTextPrefix; };
            ClientsEditorDialog.prototype.getNameProperty = function () { return Rows.ClientsRow.nameProperty; };
            return ClientsEditorDialog;
        }(AdminIPBG.Common.GridEditorDialog));
        ClientsEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ClientsEditorDialog);
        Rows.ClientsEditorDialog = ClientsEditorDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ClientsGrid = (function (_super) {
            __extends(ClientsGrid, _super);
            function ClientsGrid(container) {
                return _super.call(this, container) || this;
            }
            ClientsGrid.prototype.getColumnsKey = function () { return 'Rows.Clients'; };
            ClientsGrid.prototype.getDialogType = function () { return Rows.ClientsDialog; };
            ClientsGrid.prototype.getIdProperty = function () { return Rows.ClientsRow.idProperty; };
            ClientsGrid.prototype.getLocalTextPrefix = function () { return Rows.ClientsRow.localTextPrefix; };
            ClientsGrid.prototype.getService = function () { return Rows.ClientsService.baseUrl; };
            return ClientsGrid;
        }(Serenity.EntityGrid));
        ClientsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ClientsGrid);
        Rows.ClientsGrid = ClientsGrid;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var NoteDialog = (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        NoteDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], NoteDialog);
        Rows.NoteDialog = NoteDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Rows.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: AdminIPBG.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Rows.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        NotesEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.element("<div/>")
        ], NotesEditor);
        Rows.NotesEditor = NotesEditor;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PartsDialog = (function (_super) {
            __extends(PartsDialog, _super);
            function PartsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.PartsForm(_this.idPrefix);
                return _this;
            }
            PartsDialog.prototype.getFormKey = function () { return Rows.PartsForm.formKey; };
            PartsDialog.prototype.getIdProperty = function () { return Rows.PartsRow.idProperty; };
            PartsDialog.prototype.getLocalTextPrefix = function () { return Rows.PartsRow.localTextPrefix; };
            PartsDialog.prototype.getNameProperty = function () { return Rows.PartsRow.nameProperty; };
            PartsDialog.prototype.getService = function () { return Rows.PartsService.baseUrl; };
            return PartsDialog;
        }(Serenity.EntityDialog));
        PartsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PartsDialog);
        Rows.PartsDialog = PartsDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PartsEditor = (function (_super) {
            __extends(PartsEditor, _super);
            function PartsEditor(container) {
                return _super.call(this, container) || this;
            }
            PartsEditor.prototype.getColumnsKey = function () { return 'Rows.Parts'; };
            PartsEditor.prototype.getDialogType = function () { return Rows.PartsEditorDialog; };
            PartsEditor.prototype.getLocalTextPrefix = function () { return Rows.PartsRow.localTextPrefix; };
            return PartsEditor;
        }(AdminIPBG.Common.GridEditorBase));
        PartsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], PartsEditor);
        Rows.PartsEditor = PartsEditor;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PartsEditorDialog = (function (_super) {
            __extends(PartsEditorDialog, _super);
            function PartsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.PartsForm(_this.idPrefix);
                return _this;
            }
            PartsEditorDialog.prototype.getFormKey = function () { return Rows.PartsForm.formKey; };
            PartsEditorDialog.prototype.getLocalTextPrefix = function () { return Rows.PartsRow.localTextPrefix; };
            PartsEditorDialog.prototype.getNameProperty = function () { return Rows.PartsRow.nameProperty; };
            return PartsEditorDialog;
        }(AdminIPBG.Common.GridEditorDialog));
        PartsEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PartsEditorDialog);
        Rows.PartsEditorDialog = PartsEditorDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PartsGrid = (function (_super) {
            __extends(PartsGrid, _super);
            function PartsGrid(container) {
                return _super.call(this, container) || this;
            }
            PartsGrid.prototype.getColumnsKey = function () { return 'Rows.Parts'; };
            PartsGrid.prototype.getDialogType = function () { return Rows.PartsDialog; };
            PartsGrid.prototype.getIdProperty = function () { return Rows.PartsRow.idProperty; };
            PartsGrid.prototype.getLocalTextPrefix = function () { return Rows.PartsRow.localTextPrefix; };
            PartsGrid.prototype.getService = function () { return Rows.PartsService.baseUrl; };
            return PartsGrid;
        }(Serenity.EntityGrid));
        PartsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PartsGrid);
        Rows.PartsGrid = PartsGrid;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PhasesDialog = (function (_super) {
            __extends(PhasesDialog, _super);
            function PhasesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.PhasesForm(_this.idPrefix);
                return _this;
            }
            PhasesDialog.prototype.getFormKey = function () { return Rows.PhasesForm.formKey; };
            PhasesDialog.prototype.getIdProperty = function () { return Rows.PhasesRow.idProperty; };
            PhasesDialog.prototype.getLocalTextPrefix = function () { return Rows.PhasesRow.localTextPrefix; };
            PhasesDialog.prototype.getNameProperty = function () { return Rows.PhasesRow.nameProperty; };
            PhasesDialog.prototype.getService = function () { return Rows.PhasesService.baseUrl; };
            return PhasesDialog;
        }(Serenity.EntityDialog));
        PhasesDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PhasesDialog);
        Rows.PhasesDialog = PhasesDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PhasesEditor = (function (_super) {
            __extends(PhasesEditor, _super);
            function PhasesEditor(container) {
                return _super.call(this, container) || this;
            }
            PhasesEditor.prototype.getColumnsKey = function () { return 'Rows.Phases'; };
            PhasesEditor.prototype.getDialogType = function () { return Rows.PhasesEditorDialog; };
            PhasesEditor.prototype.getLocalTextPrefix = function () { return Rows.PhasesRow.localTextPrefix; };
            return PhasesEditor;
        }(AdminIPBG.Common.GridEditorBase));
        PhasesEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], PhasesEditor);
        Rows.PhasesEditor = PhasesEditor;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PhasesEditorDialog = (function (_super) {
            __extends(PhasesEditorDialog, _super);
            function PhasesEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.PhasesForm(_this.idPrefix);
                return _this;
            }
            PhasesEditorDialog.prototype.getFormKey = function () { return Rows.PhasesForm.formKey; };
            PhasesEditorDialog.prototype.getLocalTextPrefix = function () { return Rows.PhasesRow.localTextPrefix; };
            PhasesEditorDialog.prototype.getNameProperty = function () { return Rows.PhasesRow.nameProperty; };
            return PhasesEditorDialog;
        }(AdminIPBG.Common.GridEditorDialog));
        PhasesEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PhasesEditorDialog);
        Rows.PhasesEditorDialog = PhasesEditorDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var PhasesGrid = (function (_super) {
            __extends(PhasesGrid, _super);
            function PhasesGrid(container) {
                return _super.call(this, container) || this;
            }
            PhasesGrid.prototype.getColumnsKey = function () { return 'Rows.Phases'; };
            PhasesGrid.prototype.getDialogType = function () { return Rows.PhasesDialog; };
            PhasesGrid.prototype.getIdProperty = function () { return Rows.PhasesRow.idProperty; };
            PhasesGrid.prototype.getLocalTextPrefix = function () { return Rows.PhasesRow.localTextPrefix; };
            PhasesGrid.prototype.getService = function () { return Rows.PhasesService.baseUrl; };
            return PhasesGrid;
        }(Serenity.EntityGrid));
        PhasesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PhasesGrid);
        Rows.PhasesGrid = PhasesGrid;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ProjectorsDialog = (function (_super) {
            __extends(ProjectorsDialog, _super);
            function ProjectorsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.ProjectorsForm(_this.idPrefix);
                return _this;
            }
            ProjectorsDialog.prototype.getFormKey = function () { return Rows.ProjectorsForm.formKey; };
            ProjectorsDialog.prototype.getIdProperty = function () { return Rows.ProjectorsRow.idProperty; };
            ProjectorsDialog.prototype.getLocalTextPrefix = function () { return Rows.ProjectorsRow.localTextPrefix; };
            ProjectorsDialog.prototype.getNameProperty = function () { return Rows.ProjectorsRow.nameProperty; };
            ProjectorsDialog.prototype.getService = function () { return Rows.ProjectorsService.baseUrl; };
            return ProjectorsDialog;
        }(Serenity.EntityDialog));
        ProjectorsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ProjectorsDialog);
        Rows.ProjectorsDialog = ProjectorsDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ProjectorsEditor = (function (_super) {
            __extends(ProjectorsEditor, _super);
            function ProjectorsEditor(container) {
                return _super.call(this, container) || this;
            }
            ProjectorsEditor.prototype.getColumnsKey = function () { return 'Rows.Projectors'; };
            ProjectorsEditor.prototype.getDialogType = function () { return Rows.ProjectorsEditorDialog; };
            ProjectorsEditor.prototype.getLocalTextPrefix = function () { return Rows.ProjectorsRow.localTextPrefix; };
            return ProjectorsEditor;
        }(AdminIPBG.Common.GridEditorBase));
        ProjectorsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], ProjectorsEditor);
        Rows.ProjectorsEditor = ProjectorsEditor;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ProjectorsEditorDialog = (function (_super) {
            __extends(ProjectorsEditorDialog, _super);
            function ProjectorsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.ProjectorsForm(_this.idPrefix);
                return _this;
            }
            ProjectorsEditorDialog.prototype.getFormKey = function () { return Rows.ProjectorsForm.formKey; };
            ProjectorsEditorDialog.prototype.getLocalTextPrefix = function () { return Rows.ProjectorsRow.localTextPrefix; };
            ProjectorsEditorDialog.prototype.getNameProperty = function () { return Rows.ProjectorsRow.nameProperty; };
            return ProjectorsEditorDialog;
        }(AdminIPBG.Common.GridEditorDialog));
        ProjectorsEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ProjectorsEditorDialog);
        Rows.ProjectorsEditorDialog = ProjectorsEditorDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ProjectorsFormatter = (function () {
            function ProjectorsFormatter() {
            }
            ProjectorsFormatter.prototype.format = function (ctx) {
                return "<span class='employee-symbol male'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return ProjectorsFormatter;
        }());
        ProjectorsFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], ProjectorsFormatter);
        Rows.ProjectorsFormatter = ProjectorsFormatter;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var ProjectorsGrid = (function (_super) {
            __extends(ProjectorsGrid, _super);
            function ProjectorsGrid(container) {
                return _super.call(this, container) || this;
            }
            ProjectorsGrid.prototype.getColumnsKey = function () { return 'Rows.Projectors'; };
            ProjectorsGrid.prototype.getDialogType = function () { return Rows.ProjectorsDialog; };
            ProjectorsGrid.prototype.getIdProperty = function () { return Rows.ProjectorsRow.idProperty; };
            ProjectorsGrid.prototype.getLocalTextPrefix = function () { return Rows.ProjectorsRow.localTextPrefix; };
            ProjectorsGrid.prototype.getService = function () { return Rows.ProjectorsService.baseUrl; };
            return ProjectorsGrid;
        }(Serenity.EntityGrid));
        ProjectorsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ProjectorsGrid);
        Rows.ProjectorsGrid = ProjectorsGrid;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowDetailsDialog = (function (_super) {
            __extends(RowDetailsDialog, _super);
            function RowDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.RowDetailsForm(_this.idPrefix);
                return _this;
            }
            RowDetailsDialog.prototype.getFormKey = function () { return Rows.RowDetailsForm.formKey; };
            RowDetailsDialog.prototype.getIdProperty = function () { return Rows.RowDetailsRow.idProperty; };
            RowDetailsDialog.prototype.getLocalTextPrefix = function () { return Rows.RowDetailsRow.localTextPrefix; };
            RowDetailsDialog.prototype.getNameProperty = function () { return Rows.RowDetailsRow.nameProperty; };
            RowDetailsDialog.prototype.getService = function () { return Rows.RowDetailsService.baseUrl; };
            return RowDetailsDialog;
        }(Serenity.EntityDialog));
        RowDetailsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], RowDetailsDialog);
        Rows.RowDetailsDialog = RowDetailsDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowDetailsEditor = (function (_super) {
            __extends(RowDetailsEditor, _super);
            function RowDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            RowDetailsEditor.prototype.getColumnsKey = function () { return 'Rows.RowDetails'; };
            RowDetailsEditor.prototype.getDialogType = function () { return Rows.RowDetailsEditorDialog; };
            RowDetailsEditor.prototype.getLocalTextPrefix = function () { return Rows.RowDetailsRow.localTextPrefix; };
            RowDetailsEditor.prototype.validateEntity = function (row, id) {
                row.PartId = Q.toId(row.PartId);
                //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
                //if (sameProduct && this.id(sameProduct) !== id) {
                //    Q.alert('This product is already in order details!');
                //    return false;
                //} 
                var productLookup = Q.getLookup('Rows.Parts').itemById[row.PartId];
                row.PartName = productLookup.Name;
                //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0);
                //if (row.Quadrature > 0)
                //    row.LineTotal = row.LineTotal * row.Quadrature;
                //row.LineTotal = row.LineTotal - (row.Discount || 0) + (row.AdditionalCosts || 0);
                return true;
            };
            return RowDetailsEditor;
        }(AdminIPBG.Common.GridEditorBase));
        RowDetailsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], RowDetailsEditor);
        Rows.RowDetailsEditor = RowDetailsEditor;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowDetailsEditorDialog = (function (_super) {
            __extends(RowDetailsEditorDialog, _super);
            function RowDetailsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.RowDetailsForm(_this.idPrefix);
                return _this;
            }
            RowDetailsEditorDialog.prototype.getFormKey = function () { return Rows.RowDetailsForm.formKey; };
            RowDetailsEditorDialog.prototype.getLocalTextPrefix = function () { return Rows.RowDetailsRow.localTextPrefix; };
            RowDetailsEditorDialog.prototype.getNameProperty = function () { return Rows.RowDetailsRow.nameProperty; };
            return RowDetailsEditorDialog;
        }(AdminIPBG.Common.GridEditorDialog));
        RowDetailsEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], RowDetailsEditorDialog);
        Rows.RowDetailsEditorDialog = RowDetailsEditorDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowDetailsGrid = (function (_super) {
            __extends(RowDetailsGrid, _super);
            function RowDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            RowDetailsGrid.prototype.getColumnsKey = function () { return 'Rows.RowDetails'; };
            RowDetailsGrid.prototype.getDialogType = function () { return Rows.RowDetailsDialog; };
            RowDetailsGrid.prototype.getIdProperty = function () { return Rows.RowDetailsRow.idProperty; };
            RowDetailsGrid.prototype.getLocalTextPrefix = function () { return Rows.RowDetailsRow.localTextPrefix; };
            RowDetailsGrid.prototype.getService = function () { return Rows.RowDetailsService.baseUrl; };
            return RowDetailsGrid;
        }(Serenity.EntityGrid));
        RowDetailsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RowDetailsGrid);
        Rows.RowDetailsGrid = RowDetailsGrid;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsDialog = (function (_super) {
            __extends(RowsDialog, _super);
            function RowsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Rows.RowsForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                return _this;
                // DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
            }
            RowsDialog.prototype.getFormKey = function () { return Rows.RowsForm.formKey; };
            RowsDialog.prototype.getIdProperty = function () { return Rows.RowsRow.idProperty; };
            RowsDialog.prototype.getLocalTextPrefix = function () { return Rows.RowsRow.localTextPrefix; };
            RowsDialog.prototype.getNameProperty = function () { return Rows.RowsRow.nameProperty; };
            RowsDialog.prototype.getService = function () { return Rows.RowsService.baseUrl; };
            RowsDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            RowsDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            return RowsDialog;
        }(Serenity.EntityDialog));
        RowsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], RowsDialog);
        Rows.RowsDialog = RowsDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsEditor = (function (_super) {
            __extends(RowsEditor, _super);
            function RowsEditor(container) {
                return _super.call(this, container) || this;
            }
            RowsEditor.prototype.getColumnsKey = function () { return 'Rows.Rows'; };
            RowsEditor.prototype.getDialogType = function () { return Rows.RowsEditorDialog; };
            RowsEditor.prototype.getLocalTextPrefix = function () { return Rows.RowsRow.localTextPrefix; };
            return RowsEditor;
        }(AdminIPBG.Common.GridEditorBase));
        RowsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], RowsEditor);
        Rows.RowsEditor = RowsEditor;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsEditorDialog = (function (_super) {
            __extends(RowsEditorDialog, _super);
            function RowsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rows.RowsForm(_this.idPrefix);
                return _this;
            }
            RowsEditorDialog.prototype.getFormKey = function () { return Rows.RowsForm.formKey; };
            RowsEditorDialog.prototype.getLocalTextPrefix = function () { return Rows.RowsRow.localTextPrefix; };
            RowsEditorDialog.prototype.getNameProperty = function () { return Rows.RowsRow.nameProperty; };
            return RowsEditorDialog;
        }(AdminIPBG.Common.GridEditorDialog));
        RowsEditorDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], RowsEditorDialog);
        Rows.RowsEditorDialog = RowsEditorDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsExcelImportDialog = (function (_super) {
            __extends(RowsExcelImportDialog, _super);
            function RowsExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Rows.RowsExcelImportForm(_this.idPrefix);
                return _this;
            }
            RowsExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            RowsExcelImportDialog.prototype.getImageUploadEditorOptions = function () {
                return {
                    minWidth: 800
                };
            };
            RowsExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            Rows.RowsService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            return RowsExcelImportDialog;
        }(Serenity.PropertyDialog));
        RowsExcelImportDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RowsExcelImportDialog);
        Rows.RowsExcelImportDialog = RowsExcelImportDialog;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsFormatter = (function () {
            function RowsFormatter() {
            }
            RowsFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.SubObject) {
                    return text;
                }
                return "<span class='employee-symbol male'>" + text + '</span>';
            };
            RowsFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.SubObject)
                    column.referencedFields.push(this.SubObject);
            };
            return RowsFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], RowsFormatter.prototype, "SubObject", void 0);
        RowsFormatter = __decorate([
            Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
        ], RowsFormatter);
        Rows.RowsFormatter = RowsFormatter;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
var AdminIPBG;
(function (AdminIPBG) {
    var Rows;
    (function (Rows) {
        var RowsGrid = (function (_super) {
            __extends(RowsGrid, _super);
            function RowsGrid(container) {
                return _super.call(this, container) || this;
            }
            RowsGrid.prototype.getColumnsKey = function () { return 'Rows.Rows'; };
            RowsGrid.prototype.getDialogType = function () { return Rows.RowsDialog; };
            RowsGrid.prototype.getIdProperty = function () { return Rows.RowsRow.idProperty; };
            RowsGrid.prototype.getLocalTextPrefix = function () { return Rows.RowsRow.localTextPrefix; };
            RowsGrid.prototype.getService = function () { return Rows.RowsService.baseUrl; };
            RowsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: 'Протокол',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Протокол">' +
                        '<i class="fa fa-file-pdf-o text-red"></i> Изтегли</a>'; },
                    width: 76,
                    minWidth: 54,
                    maxWidth: 76
                });
                columns.splice(columns.length, 0, {
                    field: 'InvoiceCode',
                    name: 'Код',
                    format: function (ctx) { return '<span><i class="fa fa-lock"></i> '
                        + ctx.item.InvoiceCode
                        + '</span>'; },
                    width: 176,
                    minWidth: 154,
                    maxWidth: 176
                });
                return columns;
            };
            RowsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        AdminIPBG.Common.ReportHelper.execute({
                            reportKey: 'Rows.RowsInvoice',
                            params: {
                                RowId: item.RowId
                            }
                        });
                    }
                }
            };
            RowsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(AdminIPBG.Common.ExcelExportHelper.createToolButton({
                    title: 'Export to Excel',
                    hint: 'Export to Excel',
                    grid: this,
                    service: Rows.RowsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new Rows.RowsExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            return RowsGrid;
        }(Serenity.EntityGrid));
        RowsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RowsGrid);
        Rows.RowsGrid = RowsGrid;
    })(Rows = AdminIPBG.Rows || (AdminIPBG.Rows = {}));
})(AdminIPBG || (AdminIPBG = {}));
//# sourceMappingURL=AdminIPBG.Web.js.map