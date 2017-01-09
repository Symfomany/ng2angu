

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
