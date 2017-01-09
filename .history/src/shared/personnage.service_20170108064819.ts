import { Personnage } from './personnage';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PersonnageService {
  public $key;
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
    this.items.subscribe(
      val => {
        perso.id = val.length;
      }
    );
    this.items.push(perso);
  }


  /**
   * Remove a personnage
   */
  public remove(perso) {
    return this.items.remove(perso);
  }

  plus(personnage: Personnage) {

    // let ok = this.af.database.list('/data').map(items => {
    //   const filtered = items.filter(item => item.$key === personnage.$key);
    //   return filtered;
    // });

    let item = this.af.database.list('/data');
    item.subscribe(val => {
      val.map(el => {
        if (el.$key == personnage.$key) {
          personnage.like++;
        }
      });
    });

    // this.items.subscribe(
    //   val => {
    //     val.forEach(el => {
    //       console.log(el.$key, personnage.$key);
    //       if (el.$key == personnage.$key) {
    //         el.like++;
    //       }
    //     });
    //   }
    // );

    // personnage.like++;
    // let item = this.af.database.object('/data/' + personnage.$key); 
    // item.update({ "like": personnage.like++ });
  }

  moins(personnage: Personnage) {
    this.items.subscribe(
      val => {
        val.forEach(el => {
          if (el.$key === personnage.$key) {
            el.dislike++;
          }
        });
      }
    );
    //personnage.dislike++;
    // let item = this.af.database.object('/data/' + personnage.$key); // data/data/1
    // item.update({ "dislike": personnage.dislike++ });
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
