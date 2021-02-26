import { TestBed } from '@angular/core/testing';

import { GeneralInternalFormService } from './gi-form.service';

describe('GeneralInternalFormService', () => {
  let service: GeneralInternalFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInternalFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
