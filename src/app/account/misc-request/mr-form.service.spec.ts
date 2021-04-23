import { TestBed } from '@angular/core/testing';

import { MiscRequestFormService } from './mr-form.service';

describe('MiscRequestFormService', () => {
  let service: MiscRequestFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscRequestFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
