import { TestBed } from '@angular/core/testing';

import { GeneralRequestStatusFormService } from './grs-form.service';

describe('GeneralRequestStatusFormService', () => {
  let service: GeneralRequestStatusFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralRequestStatusFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
