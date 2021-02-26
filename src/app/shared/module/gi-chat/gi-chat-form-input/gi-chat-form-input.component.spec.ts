import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalConversationFormInputComponent } from './gi-chat-form-input.component';

describe('GeneralInternalConversationFormInputComponent', () => {
  let component: GeneralInternalConversationFormInputComponent;
  let fixture: ComponentFixture<GeneralInternalConversationFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalConversationFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalConversationFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
