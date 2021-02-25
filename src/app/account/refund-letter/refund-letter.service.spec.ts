import { TestBed } from '@angular/core/testing';

import { RefundLetterService } from './refund-letter.service';

describe('RefundLetterService', () => {
  let service: RefundLetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundLetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
