import { TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateService } from './acmt.service';

describe('AccountChangeMessageTemplateService', () => {
  let service: AccountChangeMessageTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountChangeMessageTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
