import { TestBed } from '@angular/core/testing';

import { CommentCreateService } from './comment-create.service';

describe('CommentCreateService', () => {
  let service: CommentCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
