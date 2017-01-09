import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PersonnageService {

  private title = 'Walking Dead - Les Personnages';
  private all = [
    'Michonne',
    'Rick',
    'Gleen',
    'Carole',
    'Daryl'
  ];
  private items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/');
    console.log(this.items);
  }

  filter(text) {
    this.all = this.all.map(
      m => m === text ?
        m + " (Dead)"
        : m
    );
  }


}
