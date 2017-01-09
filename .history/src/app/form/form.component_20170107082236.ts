import { PersonnageService } from '../../shared/personnage.service';
import { Personnage } from '../../shared/personnage';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private personnage: Personnage;
  private selectOptions = [
    'Californie',
    'Floride',
    'Texas',
    'Pennsylvanie',
    'Georgie',
    'Minnesota',
    'Michigan',
    'New Jersey',
    'Illinois',
  ]

  constructor( @Inject('personnage') personnage: PersonnageService) {
    this.personnage = new Personnage();
  }

  ngOnInit() {
  }

  public send() {
    this.personnageService.add(this.personnage);
    // let sexe = this.sexe;
  }

}
