/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace AdminIPBG.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('AdminIPBG');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}