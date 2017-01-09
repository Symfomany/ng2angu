import { Injectable } from '@angular/core';

@Injectable()
export class PersonnageService {
  searching = "";
  title = 'Walking Dead - Les Personnages';
  all = [
    'Michonne',
    'Rick',
    'Gleen',
    'Carole',
    'Daryl'
  ];
  constructor() { }

}
