import { TestBed } from '@angular/core/testing';

import { PaymentSessionFormService } from './payment-session-form.service';

describe('PaymentSessionFormService', () => {
  let service: PaymentSessionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentSessionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
