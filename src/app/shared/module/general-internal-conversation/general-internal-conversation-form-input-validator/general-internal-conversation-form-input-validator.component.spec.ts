import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalConversationFormInputValidatorComponent } from './general-internal-conversation-form-input-validator.component';

describe('GeneralInternalConversationFormInputValidatorComponent', () => {
  let component: GeneralInternalConversationFormInputValidatorComponent;
  let fixture: ComponentFixture<GeneralInternalConversationFormInputValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalConversationFormInputValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalConversationFormInputValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
