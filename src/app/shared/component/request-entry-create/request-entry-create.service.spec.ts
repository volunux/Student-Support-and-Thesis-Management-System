import { TestBed } from '@angular/core/testing';

import { RequestEntryCreateService } from './request-entry-create.service';

describe('RequestEntryCreateService', () => {
  let service: RequestEntryCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestEntryCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
