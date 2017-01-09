import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() personnages;


  constructor() {

  }

  ngOnInit() {
  }

}
