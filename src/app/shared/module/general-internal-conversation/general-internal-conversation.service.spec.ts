import { TestBed } from '@angular/core/testing';

import { GeneralInternalConversationService } from './general-internal-conversation.service';

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
