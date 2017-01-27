import { Component } from '@angular/core';
import { WordsService } from '../shared/services/words.service';
import { Observable }from 'rxjs/Observable';

@Component({
    selector: 'girl-name',
    template: `
    <div class= "page-header">
      {{word}}
    </div>
    <button class="btn btn-info" (click)="girlName()">Get Girl Name</button>
  `,
  styles: [`
    .page-header {
      padding-bottom: 20px;
      padding-top: 50px;
      font-size: 55px;
    }
  `]
})
export class GirlNameComponent {
  word = "Hit The Button";

  // type of word being created
  // type = "boy";

  constructor(private wordsService: WordsService) { }

  girlName(){
    this.wordsService.getGirlName().subscribe(data => {
      this.word = data.word;
    });
  }
}
