import { PersonnageService } from '../../shared/personnage.service';
import {
  Component, Inject, Input, OnInit, Output,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('activation', [
      state('true', style({
        opacity: 1
      })),
      state('false', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class ListComponent implements OnInit {

  private visible = false;

  constructor( @Inject('personnage') private personnage: PersonnageService) {
  }


  ngOnInit() {
  }

  public visibility() {
    this.visible = !this.visible;
    console.log(this.visible);
  }

}
