import { TestBed } from '@angular/core/testing';

import { InternalFourService } from './internal-four.service';

describe('InternalFourService', () => {
  let service: InternalFourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalFourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
