import { TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeFormService } from './acmtt-form.service';

describe('AccountChangeMessageTemplateTypeFormService', () => {
  let service: AccountChangeMessageTemplateTypeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountChangeMessageTemplateTypeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
