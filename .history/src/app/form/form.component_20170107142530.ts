import { PersonnageService } from '../../shared/personnage.service';
import { Personnage } from '../../shared/personnage';
import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
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

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });

  }

  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  ngOnInit() {
  }

  public send(e, personnageForm) {
    if (personnageForm.valid) {
      e.preventDefault(); //not submit form 
      console.log(personnageForm);
      this.servicePerso.add(this.personnage);
      // console.log(this.personnage);
      this.personnage = new Personnage(); //empty form
      this.closeModal(); //close modal
    }


  }

}
