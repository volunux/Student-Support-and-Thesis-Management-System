import { TestBed } from '@angular/core/testing';

import { InternalFourFormService } from './internal-four-form.service';

describe('InternalFourFormService', () => {
  let service: InternalFourFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalFourFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
