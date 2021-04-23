import { TestBed } from '@angular/core/testing';

import { RequestCredentialFormService } from './request-credential-form.service';

describe('RequestCredentialFormService', () => {
  let service: RequestCredentialFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCredentialFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
