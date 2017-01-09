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

  constructor(
    @Inject('personnage') private personnage: PersonnageService,
    @Inject('api') private api: string
  ) { }

  search(elt: any) {
    console.log(elt);
  }

}
