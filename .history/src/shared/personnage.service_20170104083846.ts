import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PersonnageService {

  private items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/data');
    console.log(this.items);
  }

  all() {
    return this.items;
  }


}
