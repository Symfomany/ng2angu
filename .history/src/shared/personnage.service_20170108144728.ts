import { AsyncPipe } from '@angular/common/src/pipes/async_pipe';
import { FilterPipe } from './filter.pipe';
import { Personnage } from './personnage';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/operator/map';

@Injectable()
export class PersonnageService {
  public $key;
  private items: FirebaseListObservable<any[]>;
  public isLoaded = false;
  public nbPersonnages = 0;
  public persos = [];

  private selectOptions = [
    'Californie',
    'Floride',
    'Texas',
    'Pennsylvanie',
    'Georgie',
    'Minnesota',
    'Michigan',
    'New Jersey',
    'Illinois',
  ];

  public constructor(private af: AngularFire) {
    this.items = this.af.database.list('/data', {
      query: {
        orderByChild: 'pseudo',
      }
    });

    this.items.subscribe(
      val => {
        this.persos = val;
        this.isLoaded = true;
        this.nbPersonnages = val.length;
      }
    );

  }

  public all(filter: any = {}) {
    // let filterPipe = new FilterPipe();
    // const fiteredArr = filterPipe.transform(this.persos, filter);
    this.items.subscribe(x => console.log('Subscriber 1: ', x.length));

    return this.items;
  }

  /**
   * Add a personnage
   */
  public add(perso: Personnage) {
    this.items.push(perso);
  }

  /**
   * is Empty
   */
  public hasPersonnage(filter: any = {}) {
    let hasPersos: Boolean = false;
    let filterPipe = new FilterPipe();
    const fiteredArr = filterPipe.transform(this.persos, filter);
    hasPersos = fiteredArr.length > 0;

    return hasPersos;
  }


  /**
   * Remove a personnage
   */
  public remove(perso) {
    return this.items.remove(perso);
  }


  public plus(personnage: Personnage) {
    personnage.like++;
    let item = this.af.database.object('/data/' + personnage.$key);
    item.update({ "like": personnage.like });
  }

  public moins(personnage: Personnage) {
    personnage.dislike++;
    let item = this.af.database.object('/data/' + personnage.$key);
    item.update({ "dislike": personnage.dislike });
  }

}
