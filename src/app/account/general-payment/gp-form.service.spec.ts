import { TestBed } from '@angular/core/testing';

import { GeneralPaymentFormService } from './gp-form.service';

describe('GeneralPaymentFormService', () => {
  let service: GeneralPaymentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralPaymentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
