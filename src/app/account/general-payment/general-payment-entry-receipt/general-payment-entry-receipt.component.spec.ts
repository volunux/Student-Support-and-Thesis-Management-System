import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentEntryReceiptComponent } from './general-payment-entry-receipt.component';

describe('GeneralPaymentEntryReceiptComponent', () => {
  let component: GeneralPaymentEntryReceiptComponent;
  let fixture: ComponentFixture<GeneralPaymentEntryReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentEntryReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentEntryReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
