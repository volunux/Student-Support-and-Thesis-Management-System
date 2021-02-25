import { TestBed } from '@angular/core/testing';

import { RequestEntryCreateFormService } from './request-entry-create-form.service';

describe('RequestEntryCreateFormService', () => {
  let service: RequestEntryCreateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestEntryCreateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
