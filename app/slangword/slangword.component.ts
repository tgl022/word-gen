import { Component } from '@angular/core';
import { Word } from '../shared/models/word';
import { WordsService } from '../shared/services/words.service';
import { Observable }from 'rxjs/Observable';

@Component({
    selector: 'slang-word',
    template: `
      <h1>{{word}}</h1>
      <button class="btn btn-info" (click)="slangWord()">Get Slang Word</button>
    `

})
export class SlangWordComponent {
  word = "Hit The Button";

  // type of word being created
  // type = "boy";

  constructor(private wordsService: WordsService) { }

  slangWord(){
    this.wordsService.getSlangWord().subscribe(data => {
      this.word = data.word;
    });
  }
}
