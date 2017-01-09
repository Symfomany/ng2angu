import { PersonnageService } from '../../shared/personnage.service';
import { Personnage } from '../../shared/personnage';


import { Component, EventEmitter, Input, OnInit } from '@angular/core';

declare var Materialize: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() personnages; // all personnages receives
  @Input() datasFilter; // all personnages receives

  constructor(private personnageService: PersonnageService) {
    console.log("laaaaa");
  }

  ngOnInit() {
  }

  /**
   * @todo: refactor with service
   */
  remove(personnage) {
    this.personnages.remove(personnage).then(function (ref) {
      Materialize.toast(`${personnage.pseudo} est mort :()`, 4000);
    });

    // if (this.personnages.length > 0) {
    //   let position = this.personnages.indexOf(personnage);
    //   this.personnages.splice(position, 1);
    // }
  }

  plus(personnage: Personnage) {
    this.personnageService.plus(personnage);
  }

  moins(personnage: Personnage) {
    this.personnageService.moins(personnage);
  }

}
