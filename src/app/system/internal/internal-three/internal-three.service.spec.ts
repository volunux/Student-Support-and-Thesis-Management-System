import { TestBed } from '@angular/core/testing';

import { InternalThreeService } from './internal-three.service';

describe('InternalThreeService', () => {
  let service: InternalThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
