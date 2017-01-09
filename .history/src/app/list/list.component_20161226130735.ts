import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() personnages;

  @Output() nbPersonnages = new EventEmitter();

  constructor() {

    this.nbPersonnages.emit(8);
  }

  ngOnInit() {
  }

}
