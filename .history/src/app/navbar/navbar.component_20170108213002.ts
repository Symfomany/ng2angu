import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() openSide = new EventEmitter();
  public open = false;

  constructor() { }

  ngOnInit() {
  }

  openSideBar() {
    this.open = !this.open;
    console.log(this.open);
    this.openSide.emit(this.open);
  }

}
