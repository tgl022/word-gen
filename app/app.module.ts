import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserBoxComponent } from './users/user-box.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { appRouting } from './app.routing';

import { UserService } from './shared/services/user.service';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    BrowserModule,
    appRouting,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    UserBoxComponent,
    NotFoundComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
