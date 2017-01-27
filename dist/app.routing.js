"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var boyname_component_1 = require("./boyname/boyname.component");
var girlname_component_1 = require("./girlname/girlname.component");
var slangword_component_1 = require("./slangword/slangword.component");
var smartword_component_1 = require("./smartword/smartword.component");
var not_found_component_1 = require("./not-found/not-found.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'boy', component: boyname_component_1.BoyNameComponent },
    { path: 'girl', component: girlname_component_1.GirlNameComponent },
    { path: 'slang', component: slangword_component_1.SlangWordComponent },
    { path: 'smart', component: smartword_component_1.SmartWordComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map