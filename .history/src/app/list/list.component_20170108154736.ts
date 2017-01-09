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

  datasFilter: any = {};

  constructor(private personnage: PersonnageService) {
  }


  ngOnInit() {
  }

  searching(datas: any) {
    this.datasFilter = Object.assign(this.datasFilter, datas);
  }


}
