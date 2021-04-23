import { TestBed } from '@angular/core/testing';

import { GeneralMessageTemplateFormService } from './gmt-form.service';

describe('GeneralMessageTemplateFormService', () => {
  let service: GeneralMessageTemplateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralMessageTemplateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
