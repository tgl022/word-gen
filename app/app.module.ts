import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BoyNameComponent } from './boyname/boyname.component';
import { GirlNameComponent } from './girlname/girlname.component';
import { SlangWordComponent } from './slangword/slangword.component';
import { SmartWordComponent } from './smartword/smartword.component';

import { WordsService } from './shared/services/words.service';

import { NotFoundComponent } from './not-found/not-found.component';
import { appRouting } from './app.routing';

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
    BoyNameComponent,
    GirlNameComponent,
    SlangWordComponent,
    SmartWordComponent,
    NotFoundComponent
  ],
  providers: [WordsService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
