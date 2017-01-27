import { Component } from '@angular/core';
import { Word } from '../shared/models/word';
import { WordsService } from '../shared/services/words.service';
import { Observable }from 'rxjs/Observable';

@Component({
    selector: 'smart-word',
    template: `
    <div class= "page-header">
      {{word}}
    </div>
    <button class="btn btn-info" (click)="smartWord()">Get Smart Word</button>
  `,
  styles: [`
    .page-header {
      padding-bottom: 20px;
      padding-top: 50px;
      font-size: 55px;
    }
  `]

})
export class SmartWordComponent {
  word = "Hit The Button";

  // type of word being created
  // type = "boy";

  constructor(private wordsService: WordsService) { }

  smartWord(){
    this.wordsService.getSmartWord().subscribe(data => {
      this.word = data.word;
    });
  }
}
