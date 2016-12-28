import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import 'rxjs/add/operator/map';

@Component({
    selector: 'home',
    template: `
  <div class="container">
    <div class="row no-more-padding" *ngIf="users">
      <div class="col-lg-2 no-more-padding" *ngFor="let user of users">
        <user-box [user]="user"></user-box>
      </div>
    </div>
  </div>

  `,
    styles: [`
    .no-more-padding {
      padding: 0px 0px 0px 0px;
    }
  `]
})

export class HomeComponent implements OnInit {

    // users: User[] = [
    //   {id:1, first_name:'Tomas', last_name:'homestar',
    //     avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg'},
    //   {id:2, first_name:'Jake', last_name:'xXCuckBibes420Xx',
    //     avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg'},
    //   {id:3, first_name:'Smith', last_name:'NotJohnSmith',
    //     avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg'},
    //   {id:4, first_name:'Rob', last_name:'R0b_Ownz',
    //     avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg'},
    //   {id:5, first_name:'Jay', last_name:'Tsuki',
    //     avatar: 'http://0x0.st/LC-.png'},
    //   {id:6, first_name:'Ethan', last_name:'ShimmyDimmy',
    //     avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg'},
    //   {id:7, first_name:'Tony', last_name:'Optamystic',
    //     avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg'},
    //   {id:8, first_name:'Tyler', last_name:'Kiesoto',
    //     avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg'},
    //   {id:9, first_name:'Scott', last_name:'ScottsName',
    //     avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg'}
    // ]
    users: User[];

    constructor(private service: UserService) { }

    ngOnInit() {
        this.service.getUsers().subscribe(
            users => this.users = users

        );
    }
}
