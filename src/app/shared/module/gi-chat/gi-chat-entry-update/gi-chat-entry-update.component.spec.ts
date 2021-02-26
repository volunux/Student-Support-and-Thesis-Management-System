import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalConversationEntryUpdateComponent } from './gi-chat-entry-update.component';

describe('GeneralInternalConversationEntryUpdateComponent', () => {
  let component: GeneralInternalConversationEntryUpdateComponent;
  let fixture: ComponentFixture<GeneralInternalConversationEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalConversationEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalConversationEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
