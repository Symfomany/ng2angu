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
import { MaterialModule } from '@angular/material';
import 'hammerjs';


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
    AppComponent,
    ListComponent,
    FilterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [ // provides all values
    { provide: 'personnage', useClass: PersonnageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
