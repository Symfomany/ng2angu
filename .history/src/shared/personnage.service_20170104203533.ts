import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PersonnageService {

  private items: FirebaseListObservable<any[]>;
  private compteur: number = 5;

  public constructor(af: AngularFire) {
    this.items = af.database.list('/data', {
      query: {
        orderByChild: 'note',
        limitToLast: this.compteur,
      }
    });

  }

  public all() {
    return this.items;
  }


}
