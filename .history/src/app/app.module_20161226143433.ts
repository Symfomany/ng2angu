import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonnageService } from '../shared/personnage.service';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: 'personnage', useClass: PersonnageService },
    { provide: 'api', useValue: 'http://www.googlee.fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
