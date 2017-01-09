import { Personnage } from './personnage';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PersonnageService {

  private items: FirebaseListObservable<any[]>;
  private compteur: number = 5;
  private nbMessages: number = 5;
  public isLoaded = false;

  public constructor(private af: AngularFire) {
    this.items = this.af.database.list('/data', {
      query: {
        orderByChild: 'note',
        limitToLast: this.compteur,
      }
    });

    this.items.subscribe(
      val => {
        this.isLoaded = true;
        this.nbMessages = val.length;
      }
    );

  }

  public all() {
    return this.items;
  }

  /**
   * Add a personnage
   */
  public add(perso: Personnage) {
    this.items.push(perso);
  }


  /**
   * Remove a personnage
   */
  public remove(perso) {
    return this.items.remove(perso);
  }

  public more() {
    this.compteur += 5;
    this.items = this.af.database.list('/data', {
      query: {
        orderByChild: 'note',
        limitToLast: this.compteur,
      }
    });
  }


}
