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
var words_service_1 = require("../shared/services/words.service");
var GirlNameComponent = (function () {
    // type of word being created
    // type = "boy";
    function GirlNameComponent(wordsService) {
        this.wordsService = wordsService;
        this.word = "Hit The Button";
    }
    GirlNameComponent.prototype.girlName = function () {
        var _this = this;
        this.wordsService.getGirlName().subscribe(function (data) {
            _this.word = data.word;
        });
    };
    return GirlNameComponent;
}());
GirlNameComponent = __decorate([
    core_1.Component({
        selector: 'girl-name',
        template: "\n    <div class= \"page-header\">\n      {{word}}\n    </div>\n    <button class=\"btn btn-info\" (click)=\"girlName()\">Get Girl Name</button>\n  ",
        styles: ["\n    .page-header {\n      padding-bottom: 20px;\n      padding-top: 50px;\n      font-size: 55px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [words_service_1.WordsService])
], GirlNameComponent);
exports.GirlNameComponent = GirlNameComponent;
//# sourceMappingURL=girlname.component.js.map