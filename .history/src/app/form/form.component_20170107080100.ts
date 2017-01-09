import { PersonnageService } from '../../shared/personnage.service';
import { Personnage } from '../../shared/personnage';
import { Component, OnInit } from '@angular/core';

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

  constructor(private personnageService: PersonnageService) {
    this.personnage = new Personnage();
  }

  ngOnInit() {
  }

  public send() {
    console.log(this.personnage);
    // let sexe = this.sexe;
  }

}
