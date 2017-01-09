import { PersonnageService } from '../../shared/personnage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private visible = false;
  datasFilter: any = {};
  @Output() search = new EventEmitter();

  constructor(private personnage: PersonnageService) { }

  ngOnInit() {
  }

  public visibility() {
    this.visible = !this.visible;
  }

  public searching(datas: any) {
    console.log(datas);
    this.datasFilter = Object.assign(this.datasFilter, datas);
    this.search.emit(this.datasFilter);
  }

}
