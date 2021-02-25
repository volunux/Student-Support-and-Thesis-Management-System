import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentEntryVerificationComponent } from './general-payment-entry-verification.component';

describe('GeneralPaymentEntryVerificationComponent', () => {
  let component: GeneralPaymentEntryVerificationComponent;
  let fixture: ComponentFixture<GeneralPaymentEntryVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentEntryVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentEntryVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
