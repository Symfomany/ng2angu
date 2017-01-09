import { FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private searching: String = '';
  private persoCtrl: FormControl = new FormControl();

  @Output() private update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(term: String) {
    console.log(term);
  }

}
