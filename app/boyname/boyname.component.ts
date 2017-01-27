import { Component } from '@angular/core';
import { Word } from '../shared/models/word';

import { WordsService } from '../shared/services/words.service';
import { Observable }from 'rxjs/Observable';

@Component({
    selector: 'my-words',
    template: `
      <h1>{{word}}</h1>
      <button class="btn btn-info" (click)="boyName()">Get Boy Name</button>
    `

})
export class BoyNameComponent {
  word = "Hit The Button";

  // type of word being created
  // type = "boy";

  constructor(private wordsService: WordsService) { }

  boyName(){
    this.wordsService.getBoyName().subscribe(data => {
      this.word = data.word;
    });
  }
}
