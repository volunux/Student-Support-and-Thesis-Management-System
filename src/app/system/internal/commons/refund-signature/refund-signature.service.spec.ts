import { TestBed } from '@angular/core/testing';

import { RefundSignatureService } from './refund-signature.service';

describe('RefundSignatureService', () => {
  let service: RefundSignatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundSignatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
