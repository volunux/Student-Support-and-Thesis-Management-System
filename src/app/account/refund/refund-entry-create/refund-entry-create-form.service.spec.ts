import { TestBed } from '@angular/core/testing';

import { RefundEntryCreateFormService } from './refund-entry-create-form.service';

describe('RefundEntryCreateFormService', () => {
  let service: RefundEntryCreateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundEntryCreateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
