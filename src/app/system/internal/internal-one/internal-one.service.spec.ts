import { TestBed } from '@angular/core/testing';

import { InternalOneService } from './internal-one.service';

describe('InternalOneService', () => {
  let service: InternalOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
