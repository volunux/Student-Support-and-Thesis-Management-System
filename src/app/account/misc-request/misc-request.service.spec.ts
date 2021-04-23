import { TestBed } from '@angular/core/testing';

import { MiscRequestService } from './misc-request.service';

describe('MiscRequestService', () => {
  let service: MiscRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
