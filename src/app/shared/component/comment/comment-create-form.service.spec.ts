import { TestBed } from '@angular/core/testing';

import { CommentCreateFormService } from './comment-create-form.service';

describe('CommentCreateFormService', () => {
  let service: CommentCreateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentCreateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
