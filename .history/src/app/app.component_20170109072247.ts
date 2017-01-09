import { Component, Inject } from '@angular/core';
import { PersonnageService } from '../shared/personnage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private nb: number = 0;
  private spoil: boolean = false;

  constructor() { }

  openSide(open: Boolean) {
    console.log(open);
  }


  // search(elt: any) {
  //   console.log(elt);
  // }

  // detect(event) {
  //   if (['Rick', 'Negan', 'Gouverneur'].indexOf(event.text.trim()) >= 0) {
  //     this.spoil = true;
  //   } else {
  //     this.spoil = false;
  //     this.personnage.filter(event.text);
  //   }
  // }

}
