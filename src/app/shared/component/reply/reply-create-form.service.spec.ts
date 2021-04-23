import { TestBed } from '@angular/core/testing';
import { ReplyCreateFormService } from './reply-create-form.service';

describe('ReplyCreateFormService' , () => {
  
  let service : ReplyCreateFormService;

  beforeEach(() => {

    TestBed.configureTestingModule({

    });

    service = TestBed.inject(ReplyCreateFormService);

  });

  it('should be created', () => {

    expect(service).toBeTruthy();

  });

});
