import { TestBed } from '@angular/core/testing';

import { UserUploadFormService } from './user-upload-form.service';

describe('UserUploadFormService', () => {
  let service: UserUploadFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUploadFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
