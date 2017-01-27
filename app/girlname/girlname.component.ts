import { Component } from '@angular/core';
import { WordsService } from '../shared/services/words.service';
import { Observable }from 'rxjs/Observable';

@Component({
    selector: 'girl-name',
    template: `
      <h1>{{word}}</h1>
      <button class="btn btn-info" (click)="girlName()">Get Girl Name</button>
    `

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
