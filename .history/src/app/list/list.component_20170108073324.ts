import { PersonnageService } from '../../shared/personnage.service';
import {
  animate,
  Component,
  Inject,
  Input,
  OnInit,
  Output
} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(private personnage: PersonnageService) {
  }


  ngOnInit() {
  }



}
