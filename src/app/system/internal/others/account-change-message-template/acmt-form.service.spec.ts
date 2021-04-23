import { TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateFormService } from './acmt-form.service';

describe('AccountChangeMessageTemplateFormService', () => {
  let service: AccountChangeMessageTemplateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountChangeMessageTemplateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
