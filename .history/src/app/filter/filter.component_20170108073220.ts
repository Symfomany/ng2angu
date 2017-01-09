import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private searching: String = '';
  @Input() private spoil;
  @Output() private update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(term: String) {
    console.log(term);
  }

  public visibility() {
    this.visible = !this.visible;
  }


}
