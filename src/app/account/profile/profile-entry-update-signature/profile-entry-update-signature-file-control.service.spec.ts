import { TestBed } from '@angular/core/testing';

import { ProfileEntryUpdateSignatureFileControlService } from './profile-entry-update-signature-file-control.service';

describe('ProfileEntryUpdateSignatureFileControlService', () => {
  let service: ProfileEntryUpdateSignatureFileControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileEntryUpdateSignatureFileControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
