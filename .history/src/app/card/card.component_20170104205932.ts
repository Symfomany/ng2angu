

import {
  animate,
  Component,
  EventEmitter,
  Input,
  keyframes,
  OnInit,
  state,
  style,
  transition,
  trigger
} from '@angular/core';

declare var Materialize: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() personnages; // all personnages receives

  constructor() { }

  ngOnInit() {
  }


  remove(personnage) {
    this.personnages.remove(personnage).then(function (ref) {
      Materialize.toast(`${personnage.pseudo} est mort :()`, 4000);
    });

    // if (this.personnages.length > 0) {
    //   let position = this.personnages.indexOf(personnage);
    //   this.personnages.splice(position, 1);
    // }
  }

}
