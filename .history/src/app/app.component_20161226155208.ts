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
    @Inject('personnage') private personnage: PersonnageService,
    @Inject('api') private api: string
  ) { }

  search(elt: any) {
    console.log(elt);
  }

  detect(event) {
    if (event.text == "Rick") {
      this.spoil = true;
    } else {
      this.spoil = false;
    }
  }

}
