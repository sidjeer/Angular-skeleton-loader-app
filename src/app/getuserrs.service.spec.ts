import { TestBed } from '@angular/core/testing';

import { GetuserrsService } from './getuserrs.service';

describe('GetuserrsService', () => {
  let service: GetuserrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetuserrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
