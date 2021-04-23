import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeFormInputComponent } from './acmtt-form-input.component';

describe('AccountChangeMessageTemplateTypeFormInputComponent', () => {
  let component: AccountChangeMessageTemplateTypeFormInputComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
