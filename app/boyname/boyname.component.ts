import { Component } from '@angular/core';
import { Word } from '../shared/models/word';

import { WordsService } from '../shared/services/words.service';
import { Observable }from 'rxjs/Observable';

@Component({
    selector: 'my-words',
    template: `
      <div class= "page-header">
        {{word}}
      </div>
      <button class="btn btn-info" (click)="boyName()">Get Boy Name</button>
    `,
    styles: [`
      .page-header {
        padding-bottom: 20px;
        padding-top: 50px;
        font-size: 55px;
      }
    `]
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
