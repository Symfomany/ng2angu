import { Personnage } from '../../../.history/src/shared/personnage_20170107053701';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private personnage: Personnage) { }

  ngOnInit() {
  }

  public send() {
    // let sexe = this.sexe;
  }

}
