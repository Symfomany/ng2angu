/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonnageService } from './personnage.service';

describe('PersonnageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonnageService]
    });
  });

  it('should ...', inject([PersonnageService], (service: PersonnageService) => {
    expect(service).toBeTruthy();
  }));
});
