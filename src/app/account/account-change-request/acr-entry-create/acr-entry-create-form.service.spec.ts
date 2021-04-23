import { TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryCreateFormService } from './acr-entry-create-form.service';

describe('AccountChangeRequestEntryCreateFormService', () => {
  let service: AccountChangeRequestEntryCreateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountChangeRequestEntryCreateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
