import { PersonnageService } from '../../shared/personnage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private visible = false;
  @Output() search = new EventEmitter();

  constructor(private personnage: PersonnageService) { }

  ngOnInit() {
  }

  public visibility() {
    this.visible = !this.visible;
  }

  public search(data) {
    this.search.emit({
      text: data.text.trim().toLowerCase(),
      sexe: data.sexe,
    });
  }

}
