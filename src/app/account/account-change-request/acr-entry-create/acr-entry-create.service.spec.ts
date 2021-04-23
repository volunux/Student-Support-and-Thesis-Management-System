import { TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryCreateService } from './acr-entry-create.service';

describe('AccountChangeRequestEntryCreateService', () => {
  let service: AccountChangeRequestEntryCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountChangeRequestEntryCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
