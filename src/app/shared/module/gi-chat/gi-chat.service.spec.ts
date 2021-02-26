import { TestBed } from '@angular/core/testing';

import { GeneralInternalConversationService } from './gi-chat.service';

describe('GeneralInternalConversationService', () => {
  let service: GeneralInternalConversationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInternalConversationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
