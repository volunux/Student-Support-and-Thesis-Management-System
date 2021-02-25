import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalConversationEntryDetailComponent } from './general-internal-conversation-entry-detail.component';

describe('GeneralInternalConversationEntryDetailComponent', () => {
  let component: GeneralInternalConversationEntryDetailComponent;
  let fixture: ComponentFixture<GeneralInternalConversationEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalConversationEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalConversationEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
