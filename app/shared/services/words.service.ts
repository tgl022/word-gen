import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordsService {



  constructor(private http: Http) { }

  //get new word
  // getNewWord(type) { }
  private wordsUrl = 'api/words';
  //Get word
  getNewWord() {
    return this.http.get(this.wordsUrl)
        .map(res => res);
  //  return "ho";
  //  return this.http.get(this.wordsUrl);
  }

}
