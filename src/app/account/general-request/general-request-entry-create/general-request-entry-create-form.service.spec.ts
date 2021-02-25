import { TestBed } from '@angular/core/testing';

import { GeneralRequestEntryCreateFormService } from './general-request-entry-create-form.service';

describe('GeneralRequestEntryCreateFormService', () => {
  let service: GeneralRequestEntryCreateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralRequestEntryCreateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
