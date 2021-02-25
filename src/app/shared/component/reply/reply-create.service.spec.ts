import { TestBed } from '@angular/core/testing';

import { ReplyCreateService } from './reply-create.service';

describe('ReplyCreateService', () => {
  let service: ReplyCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplyCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
