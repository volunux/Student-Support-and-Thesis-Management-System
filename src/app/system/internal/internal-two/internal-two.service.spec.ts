import { TestBed } from '@angular/core/testing';

import { InternalTwoService } from './internal-two.service';

describe('InternalTwoService', () => {
  let service: InternalTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
