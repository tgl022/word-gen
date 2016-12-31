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
        this.word = "";
    }
    WordsComponent.prototype.newWord = function () {
        var _this = this;
        this.wordsService.getNewWord().subscribe(function (data) {
            _this.word = data.boyWord;
        });
    };
    return WordsComponent;
}());
WordsComponent = __decorate([
    core_1.Component({
        selector: 'my-words',
        template: "\n      <a class=\"btn btn-primary btn-sm\" (click)=\"newWord()\">Get Word</a>\n      <span>{{word}}</span>\n    "
    }),
    __metadata("design:paramtypes", [words_service_1.WordsService])
], WordsComponent);
exports.WordsComponent = WordsComponent;
//# sourceMappingURL=words.component.js.map