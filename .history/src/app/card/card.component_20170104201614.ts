
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';

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

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() personnages; // all personnages receives
  globalActions = new EventEmitter<string | MaterializeAction>();


  constructor() { }

  ngOnInit() {
  }


  remove(personnage) {
    console.log(this.personnages);
    this.personnages.remove(personnage).then(function (ref) {
      this.globalActions.emit(`${personnage.pseudo} est mort :()`)
    });

    // if (this.personnages.length > 0) {
    //   let position = this.personnages.indexOf(personnage);
    //   this.personnages.splice(position, 1);
    // }
  }

}
