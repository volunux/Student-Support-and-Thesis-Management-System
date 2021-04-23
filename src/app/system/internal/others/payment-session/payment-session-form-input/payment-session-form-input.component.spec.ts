import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionFormInputComponent } from './payment-session-form-input.component';

describe('PaymentSessionFormInputComponent', () => {
  let component: PaymentSessionFormInputComponent;
  let fixture: ComponentFixture<PaymentSessionFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
