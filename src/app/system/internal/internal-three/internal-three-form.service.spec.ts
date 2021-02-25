import { TestBed } from '@angular/core/testing';

import { InternalThreeFormService } from './internal-three-form.service';

describe('InternalThreeFormService', () => {
  let service: InternalThreeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalThreeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
