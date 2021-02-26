import { TestBed } from '@angular/core/testing';

import { GeneralRequestFormService } from './gr-form.service';

describe('GeneralRequestFormService', () => {
  let service: GeneralRequestFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralRequestFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
