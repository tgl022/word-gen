import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordsService {



  constructor(private http: Http) { }


  private wordsUrl = 'api/words';

  //Get word
  getNewWord() {
    return this.http.get(this.wordsUrl)
      .map(res => res.json());
  }

}
