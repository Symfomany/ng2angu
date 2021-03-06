import { Component, Inject } from '@angular/core';
import { PersonnageService } from '../shared/personnage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private personnages: Array<any> = [];
  private nb: number = 0;
  private spoil: boolean = false;

  constructor(
    @Inject('personnage') private personnage: PersonnageService
  ) { }

  search(elt: any) {
    console.log(elt);
  }

  detect(event) {
    if (['Rick', 'Negan', 'Gouverneur'].indexOf(event.text.trim()) >= 0) {
      this.spoil = true;
    } else {
      this.spoil = false;
      this.personnage.filter(event.text);
    }
  }

}
