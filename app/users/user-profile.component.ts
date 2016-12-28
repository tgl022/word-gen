import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';


@Component({
  selector: 'user-profile',
  template: `
  <div class= "jumbotron" *ngIf="user">
    <h2>{{user.name}} <small>{{user.username}}</small></h2>
  </div>
  `

})
export class UserProfileComponent {
  @Input() user: User;

}
