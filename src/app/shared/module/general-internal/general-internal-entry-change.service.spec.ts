import { TestBed } from '@angular/core/testing';

import { GeneralInternalEntryChangeService } from './general-internal-entry-change.service';

describe('GeneralInternalEntryChangeService', () => {
  let service: GeneralInternalEntryChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInternalEntryChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
