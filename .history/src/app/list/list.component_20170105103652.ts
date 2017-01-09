import { PersonnageService } from '../../shared/personnage.service';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
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
