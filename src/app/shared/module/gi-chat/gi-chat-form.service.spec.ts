import { TestBed } from '@angular/core/testing';

import { GeneralInternalConversationFormService } from './gi-chat-form.service';

describe('GeneralInternalConversationFormService', () => {
  let service: GeneralInternalConversationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInternalConversationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
