import { TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateFormService } from './rcmt-form.service';

describe('RequestChangeMessageTemplateFormService', () => {
  let service: RequestChangeMessageTemplateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestChangeMessageTemplateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
