import { Component } from '@angular/core';
import { Word } from '../shared/models/word';
import { WordsService } from '../shared/services/words.service';
import { Observable }from 'rxjs/Observable';

@Component({
    selector: 'slang-word',
    template: `
    <div class= "page-header">
      {{word}}
    </div>
    <button class="btn btn-info" (click)="slangWord()">Get Slang Word</button>
  `,
  styles: [`
    .page-header {
      padding-bottom: 20px;
      padding-top: 50px;
      font-size: 55px;
    }
  `]

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
