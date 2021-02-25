import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalConversationEntryDeleteComponent } from './general-internal-conversation-entry-delete.component';

describe('GeneralInternalConversationEntryDeleteComponent', () => {
  let component: GeneralInternalConversationEntryDeleteComponent;
  let fixture: ComponentFixture<GeneralInternalConversationEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalConversationEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalConversationEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
