import { Injectable } from '@angular/core';

@Injectable()
export class PersonnageService {

  title = 'Walking Dead - Les Personnages';
  personnages = [
    'Michonne',
    'Rick',
    'Gleen',
    'Carole',
    'Daryl'
  ];
  constructor() { }

}
