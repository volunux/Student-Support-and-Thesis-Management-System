import { TestBed } from '@angular/core/testing';

import { AcrSendMailService } from './mr-send-mail.service';

describe('AcrSendMailService', () => {
  let service: AcrSendMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcrSendMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
