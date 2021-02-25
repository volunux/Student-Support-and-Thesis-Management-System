import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentEntryCreateValidatorComponent } from './general-payment-entry-create-validator.component';

describe('GeneralPaymentEntryCreateValidatorComponent', () => {
  let component: GeneralPaymentEntryCreateValidatorComponent;
  let fixture: ComponentFixture<GeneralPaymentEntryCreateValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentEntryCreateValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentEntryCreateValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
