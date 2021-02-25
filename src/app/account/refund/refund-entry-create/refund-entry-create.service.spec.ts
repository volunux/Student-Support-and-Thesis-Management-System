import { TestBed } from '@angular/core/testing';

import { RefundEntryCreateService } from './refund-entry-create.service';

describe('RefundEntryCreateService', () => {
  let service: RefundEntryCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefundEntryCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
