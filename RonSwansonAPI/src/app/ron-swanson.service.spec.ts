import { TestBed, inject } from '@angular/core/testing';

import { RonSwansonService } from './ron-swanson.service';

describe('RonSwansonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RonSwansonService]
    });
  });

  it('should be created', inject([RonSwansonService], (service: RonSwansonService) => {
    expect(service).toBeTruthy();
  }));
});
