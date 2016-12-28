import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';


@Component({
    selector: 'user-box',
    template: `
  <div class="card" >
    <img [src]="user.avatar" class="img-responsive img-circle">
      {{user.first_name}}
  </div>
  `,
    styles: [`
    .card {
      display: block;
      background: #f3f3f3;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 30px 15px 30px 15px;
      text-align: center;
      position: relative;
      cursor: pointer;
    }
    :hover {
      color: #FFF;
      background: #1d1d1d;
    }
    .card img  {
      max-width: 50%;
      margin: 15px auto;
    }
  `]

})
export class UserBoxComponent {
    @Input() user: User;
}
