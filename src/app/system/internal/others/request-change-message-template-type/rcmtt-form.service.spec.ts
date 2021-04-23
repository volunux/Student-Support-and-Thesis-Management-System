import { TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeFormService } from './rcmtt-form.service';

describe('RequestChangeMessageTemplateTypeFormService', () => {
  let service: RequestChangeMessageTemplateTypeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestChangeMessageTemplateTypeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
