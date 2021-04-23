import { TestBed } from '@angular/core/testing';

import { AcrSendMailFormService } from './acr-send-mail-form.service';

describe('AcrSendMailFormService', () => {
  let service: AcrSendMailFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcrSendMailFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
