import { TestBed } from '@angular/core/testing';

import { InternalTwoFormService } from './internal-two-form.service';

describe('InternalTwoFormService', () => {
  let service: InternalTwoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalTwoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
