import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateFormInputComponent } from './acmt-form-input.component';

describe('AccountChangeMessageTemplateFormInputComponent', () => {
  let component: AccountChangeMessageTemplateFormInputComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
