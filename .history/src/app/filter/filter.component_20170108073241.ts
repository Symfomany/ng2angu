import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private visible = false;

  constructor() { }

  ngOnInit() {
  }


  public visibility() {
    this.visible = !this.visible;
  }


}
