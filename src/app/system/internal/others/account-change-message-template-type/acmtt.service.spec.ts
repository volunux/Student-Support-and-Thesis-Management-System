import { TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeService } from './acmtt.service';

describe('AccountChangeMessageTemplateTypeService', () => {
  let service: AccountChangeMessageTemplateTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountChangeMessageTemplateTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
