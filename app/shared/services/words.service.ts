import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordsService {



  constructor(private http: Http) { }


  private boyURL = 'api/boy';
  private girlURL = 'api/girl';
  private slangURL = 'api/slang';
  private smartURL = 'api/smart';

  //Get word

  getBoyName() {
    return this.http.get(this.boyURL)
      .map(res => res.json());
  }

  getGirlName() {
    return this.http.get(this.girlURL)
      .map(res => res.json());
  }

  getSlangWord() {
    return this.http.get(this.slangURL)
      .map(res => res.json());
  }

  getSmartWord() {
    return this.http.get(this.smartURL)
      .map(res => res.json());
  }

}
