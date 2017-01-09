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



  public plus(personnage: Personnage) {
    personnage.like++;
    let item = this.af.database.object('/data/' + personnage.$key);
    item.update({ "like": personnage.like });
  }

  public searchByName(text: String) {
    let regEx = new RegExp(`/${text}/`, 'i');

    // this.items.subscribe(
    //   val => {
    //      val.filter(el => {
    //     return regEx.test(el.pseudo) || regEx.test(el.activite)
    //   })
    //   }
    // );

    // let items = this.af.database.list('/data');
    // this.items.subscribe(
    //   val => {
    //     val.filter(el => {
    //       return regEx.test(el.pseudo) || regEx.test(el.activite)
    //     });
    //   }
    // );
  }

  public moins(personnage: Personnage) {
    personnage.dislike++;
    let item = this.af.database.object('/data/' + personnage.$key);
    item.update({ "dislike": personnage.dislike });
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
