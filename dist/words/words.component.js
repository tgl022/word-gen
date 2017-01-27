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
var WordsComponent = (function () {
    // type of word being created
    // type = "boy";
    function WordsComponent(wordsService) {
        this.wordsService = wordsService;
        this.word = "Hit The Button";
    }
    WordsComponent.prototype.newWord = function () {
        var _this = this;
        this.wordsService.getBoyName().subscribe(function (data) {
            _this.word = data.word;
        });
    };
    return WordsComponent;
}());
WordsComponent = __decorate([
    core_1.Component({
        selector: 'my-words',
        template: "\n      <h1>{{word}}</h1>\n      <button class=\"btn btn-info\" (click)=\"newWord()\">Get Word</button>\n      <label class=\"checkbox checkbox-blue\" for=\"checkbox1\">\n      <input type=\"checkbox\" value=\"\" id=\"checkbox1\" data-toggle=\"checkbox\" checked> Blue\n      </label>\n    "
    }),
    __metadata("design:paramtypes", [words_service_1.WordsService])
], WordsComponent);
exports.WordsComponent = WordsComponent;
//# sourceMappingURL=words.component.js.map