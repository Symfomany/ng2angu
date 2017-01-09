import { Component, Inject } from '@angular/core';
import { PersonnageService } from '../shared/personnage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public personnages: Array<any> = [];
  public nb: number = 0;
  public spoil: boolean = false;

  constructor(
    @Inject('personnage') private personnage: PersonnageService
  ) { }

  search(elt: any) {
    console.log(elt);
  }

  detect(event) {
    if (['Glenn', 'Abraham'].indexOf(event.text.trim())) {
      this.spoil = true;
    } else {
      this.spoil = false;
      this.personnage.filter(event.text)
    }
  }

}
