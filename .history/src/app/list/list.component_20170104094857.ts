import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() personnages; // all personnages receives


  constructor() {

  }

  ngOnInit() {
  }

}
