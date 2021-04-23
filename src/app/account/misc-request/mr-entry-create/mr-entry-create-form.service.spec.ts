import { TestBed } from '@angular/core/testing';

import { MiscRequestEntryCreateFormService } from './mr-entry-create-form.service';

describe('MiscRequestEntryCreateFormService', () => {
  let service: MiscRequestEntryCreateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscRequestEntryCreateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
