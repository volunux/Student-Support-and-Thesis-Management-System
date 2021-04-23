import { TestBed } from '@angular/core/testing';

import { AcrUpdateFormService } from './acr-update-form.service';

describe('AcrUpdateFormService', () => {
  let service: AcrUpdateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcrUpdateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
