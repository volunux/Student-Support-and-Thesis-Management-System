import { TestBed } from '@angular/core/testing';

import { GeneralMessageTemplateEntryChangeService } from './gmt-entry-change.service';

describe('GeneralMessageTemplateEntryChangeService', () => {
  let service: GeneralMessageTemplateEntryChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralMessageTemplateEntryChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
