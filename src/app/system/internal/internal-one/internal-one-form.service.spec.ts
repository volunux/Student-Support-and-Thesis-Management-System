import { TestBed } from '@angular/core/testing';

import { InternalOneFormService } from './internal-one-form.service';

describe('InternalOneFormService', () => {
  let service: InternalOneFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalOneFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
