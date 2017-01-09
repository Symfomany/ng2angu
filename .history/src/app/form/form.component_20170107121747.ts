import { PersonnageService } from '../../shared/personnage.service';
import { Personnage } from '../../shared/personnage';
import { Component, Inject, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private modalActions = new EventEmitter<string | MaterializeAction>();

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

  constructor(private servicePerso: PersonnageService) {
    this.personnage = new Personnage();
  }

  ngOnInit() {
  }

  public send() {
    this.servicePerso.add(this.personnage);
    console.log(this.personnage);
    this.personnage = new Personnage();
  }

}
