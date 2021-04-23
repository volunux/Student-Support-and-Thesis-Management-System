import { TestBed } from '@angular/core/testing';

import { RequestTypeFormService } from './request-type-form.service';

describe('RequestTypeFormService', () => {
  let service: RequestTypeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTypeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
