import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'home',
    template: `
  <div class="container">
    <my-words></my-words>
  </div>

  `,
    styles: [`
    .no-more-padding {
      padding: 0px 0px 0px 0px;
    }
  `]
})

export class HomeComponent {
}
