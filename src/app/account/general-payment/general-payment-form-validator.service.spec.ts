import { TestBed } from '@angular/core/testing';

import { GeneralPaymentFormValidatorService } from './general-payment-form-validator.service';

describe('GeneralPaymentFormValidatorService', () => {
  let service: GeneralPaymentFormValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralPaymentFormValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
