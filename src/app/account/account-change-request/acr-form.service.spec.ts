import { TestBed } from '@angular/core/testing';

import { AccountChangeRequestFormService } from './acr-form.service';

describe('AccountChangeRequestFormService', () => {
  let service: AccountChangeRequestFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountChangeRequestFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
