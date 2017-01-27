import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoyNameComponent } from './boyname/boyname.component';
import { GirlNameComponent } from './girlname/girlname.component';
import { SlangWordComponent } from './slangword/slangword.component';
import { SmartWordComponent } from './smartword/smartword.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'boy', component: BoyNameComponent },
  { path: 'girl', component: GirlNameComponent },
  { path: 'slang', component: SlangWordComponent },
  { path: 'smart', component: SmartWordComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
