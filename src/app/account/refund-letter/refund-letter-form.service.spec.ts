import { TestBed } from '@angular/core/testing';

import { RefundLetterFormService } from './refund-letter-form.service';

describe('RefundLetterFormService', () => {
  let service: RefundLetterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundLetterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
