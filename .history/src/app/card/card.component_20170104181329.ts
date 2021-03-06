import { TruncatePipe } from '../../shared/truncate.pipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  pipes: [TruncatePipe],
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() personnages; // all personnages receives


  constructor() { }

  ngOnInit() {
  }

}
