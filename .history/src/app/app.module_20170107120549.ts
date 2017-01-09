import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonnageService } from '../shared/personnage.service';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { AngularFireModule } from 'angularfire2';
import { CardComponent } from './card/card.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './logo/logo.component';
import { TruncatePipe } from '../shared/truncate.pipe';
import { NumberPipe } from '../shared/number.pipe';
import { FormComponent } from './form/form.component';


import { MaterializeDirective } from "angular2-materialize";



// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDkp-iHCzS6eoVUUvlTQRttShaTWAlcvSA",
  authDomain: "angularlyon.firebaseapp.com",
  databaseURL: "https://angularlyon.firebaseio.com",
  storageBucket: "angularlyon.appspot.com",
  messagingSenderId: "385773860419"
};

@NgModule({
  declarations: [
    MaterializeDirective,
    AppComponent,
    ListComponent,
    FilterComponent,
    CardComponent,
    NavbarComponent,
    SidebarComponent,
    LogoComponent,
    TruncatePipe,
    NumberPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ // provides all values
    PersonnageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
