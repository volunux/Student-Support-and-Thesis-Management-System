import { TestBed } from '@angular/core/testing';

import { GeneralRequestStatusService } from './grs.service';

describe('GeneralRequestStatusService', () => {
  let service: GeneralRequestStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralRequestStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
