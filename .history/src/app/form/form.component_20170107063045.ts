import { Personnage } from '../../shared/personnage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  personnage = new Personnage();

  constructor() { }

  ngOnInit() {
  }

  public send() {
    console.log(this.personnage);
    // let sexe = this.sexe;
  }

}
