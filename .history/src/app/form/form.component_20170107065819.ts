import { Personnage } from '../../shared/personnage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private personnage: Personnage;

  constructor() {
    this.personnage = new Personnage();
  }

  ngOnInit() {
  }

  public send() {
    console.log(this.personnage);
    // let sexe = this.sexe;
  }

}
