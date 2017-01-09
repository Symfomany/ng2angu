import { PersonnageService } from '../../shared/personnage.service';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  private personnages; // all personnages receives

  constructor( @Inject('personnage') private personnage: PersonnageService) {
    this.personnages = personnage.all();
  }

  ngOnInit() {
  }

}
