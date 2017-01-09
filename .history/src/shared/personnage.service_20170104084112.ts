import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PersonnageService {

  private items: FirebaseListObservable<any[]>;

  public constructor(af: AngularFire) {
    this.items = af.database.list('/data');
    console.log(this.items);
  }

  public all() {
    return this.items;
  }


}
