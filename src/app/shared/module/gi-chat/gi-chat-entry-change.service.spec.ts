import { TestBed } from '@angular/core/testing';

import { GeneralInternalConversationEntryChangeService } from './gi-chat-entry-change.service';

describe('GeneralInternalConversationEntryChangeService', () => {
  let service: GeneralInternalConversationEntryChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInternalConversationEntryChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
