import { PersonnageService } from '../../shared/personnage.service';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {


  constructor( @Inject('personnage') private personnage: PersonnageService) {
  }

  ngOnInit() {
  }

}
