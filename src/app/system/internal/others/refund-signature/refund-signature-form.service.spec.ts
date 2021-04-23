import { TestBed } from '@angular/core/testing';

import { RefundSignatureFormService } from './refund-signature-form.service';

describe('RefundSignatureFormService', () => {
  let service: RefundSignatureFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundSignatureFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
