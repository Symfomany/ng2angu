import { Component } from '@angular/core';
import { PersonnageService } from './personnage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private personnage: PersonnageService) {

  }

  search(elt: any) {
    console.log(elt);
  }
}
