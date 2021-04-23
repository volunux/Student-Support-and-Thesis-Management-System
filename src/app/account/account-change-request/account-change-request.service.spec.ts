import { TestBed } from '@angular/core/testing';

import { AccountChangeRequestService } from './account-change-request.service';

describe('AccountChangeRequestService', () => {
  let service: AccountChangeRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountChangeRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
