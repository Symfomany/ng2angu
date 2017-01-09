import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public personnages: Array<any> = [];
  public nb: number = 0;

  constructor( @Inject('personnage') private personnage: PersonnageService) {
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

}
