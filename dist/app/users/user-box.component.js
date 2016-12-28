"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_1 = require("../shared/models/user");
var UserBoxComponent = (function () {
    function UserBoxComponent() {
    }
    return UserBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserBoxComponent.prototype, "user", void 0);
UserBoxComponent = __decorate([
    core_1.Component({
        selector: 'user-box',
        template: "\n  <div class=\"card\" >\n    <img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n      {{user.first_name}}\n  </div>\n  ",
        styles: ["\n    .card {\n      display: block;\n      background: #f3f3f3;\n      box-sizing: border-box;\n      border-radius: 4px;\n      padding: 30px 15px 30px 15px;\n      text-align: center;\n      position: relative;\n      cursor: pointer;\n    }\n    :hover {\n      color: #FFF;\n      background: #1d1d1d;\n    }\n    .card img  {\n      max-width: 50%;\n      margin: 15px auto;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], UserBoxComponent);
exports.UserBoxComponent = UserBoxComponent;
//# sourceMappingURL=user-box.component.js.map