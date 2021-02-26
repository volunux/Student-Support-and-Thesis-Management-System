import { TestBed } from '@angular/core/testing';

import { GeneralRequestEntryCreateService } from './gr-entry-create.service';

describe('GeneralRequestEntryCreateService', () => {
  let service: GeneralRequestEntryCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralRequestEntryCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
