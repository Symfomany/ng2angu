import { Component } from '@angular/core';
import { PersonnageService } from './personnage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public personnages: Array<any> = [];
  public nb: number = 0;

  constructor(private personnage: PersonnageService) {
    this.personnages = [
      'Michonne',
      'Rick',
      'Gleen',
      'Carole',
      'Daryl'
    ];
  }

  search(elt: any) {
    console.log(elt);
  }

  nbPersonnages(nbPersonnages) {
    this.nb = nbPersonnages;
  }
}
