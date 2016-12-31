import { Component } from '@angular/core';
import { Word } from '../shared/models/word';

import { WordsService } from '../shared/services/words.service';
import { Observable }from 'rxjs/Observable';

@Component({
    selector: 'my-words',
    template: `
      <a class="btn btn-primary btn-sm" (click)="newWord()">Get Word</a>
      <span>{{word}}</span>
    `

})
export class WordsComponent {
  word = "";

  // type of word being created
  // type = "boy";

  constructor(private wordsService: WordsService) { }

  newWord(){
    this.wordsService.getNewWord().subscribe(data => {
      this.word = data.boyWord;
    });
  }
}
