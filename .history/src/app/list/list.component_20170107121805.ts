import { PersonnageService } from '../../shared/personnage.service';
import {
  animate,
  Component,
  Inject,
  Input,
  OnInit,
  Output,
  state,
  style,
  transition,
  trigger
} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('activation', [
      state('shown', style({
        opacity: 1,
        marginTop: "0%"
      })),
      state('hidden', style({
        opacity: 0,
        marginTop: "-100%"
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class ListComponent implements OnInit {

  private visible = false;
  private visibleClass = 'shown';

  constructor(private personnage: PersonnageService) {
  }


  ngOnInit() {
  }

  public visibility() {
    this.visible = !this.visible;
    this.visibleClass = this.visible ? 'shown' : 'hidden';
  }


}
