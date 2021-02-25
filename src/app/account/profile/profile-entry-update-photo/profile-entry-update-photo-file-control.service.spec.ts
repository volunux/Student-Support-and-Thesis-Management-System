import { TestBed } from '@angular/core/testing';

import { ProfileEntryUpdatePhotoFileControlService } from './profile-entry-update-photo-file-control.service';

describe('ProfileEntryUpdatePhotoFileControlService', () => {
  let service: ProfileEntryUpdatePhotoFileControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileEntryUpdatePhotoFileControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
