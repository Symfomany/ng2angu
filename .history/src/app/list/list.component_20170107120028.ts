import { PersonnageService } from '../../shared/personnage.service';
import {
  animate,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  state,
  style,
  transition,
  trigger
} from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';


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
  // modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private personnage: PersonnageService) {
  }

  openModal() {
    // this.modalActions.emit({ action: "modal", params: ['open'] });

  }

  closeModal() {
    // this.modalActions.emit({ action: "modal", params: ['close'] });
  }
  ngOnInit() {
  }

  public visibility() {
    this.visible = !this.visible;
    this.visibleClass = this.visible ? 'shown' : 'hidden';
  }


}
