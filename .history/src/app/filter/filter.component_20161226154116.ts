import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private searching: String = '';
  @Output private update = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  search(term: String) {
    console.log(term);
  }

}
