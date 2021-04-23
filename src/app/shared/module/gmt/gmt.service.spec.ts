import { TestBed } from '@angular/core/testing';

import { GeneralMessageTemplateService } from './gmt.service';

describe('GeneralMessageTemplateService', () => {
  let service: GeneralMessageTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralMessageTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
