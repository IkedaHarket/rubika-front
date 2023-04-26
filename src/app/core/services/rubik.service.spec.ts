import { TestBed } from '@angular/core/testing';

import { RubikService } from './rubik.service';

describe('RubikService', () => {
  let service: RubikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
