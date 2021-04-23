import { TestBed } from '@angular/core/testing';

import { MiscRequestEntryCreateService } from './mr-entry-create.service';

describe('MiscRequestEntryCreateService', () => {
  let service: MiscRequestEntryCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscRequestEntryCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
