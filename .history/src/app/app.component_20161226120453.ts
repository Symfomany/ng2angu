import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Walking Dead Personnages';

  constructor(private personnage: PersonnageService) {

  }

  search(elt: any) {
    console.log(elt);
  }
}
