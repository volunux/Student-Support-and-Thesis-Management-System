import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionEntryValidatorComponent } from './payment-session-entry-validator.component';

describe('PaymentSessionEntryValidatorComponent', () => {
  let component: PaymentSessionEntryValidatorComponent;
  let fixture: ComponentFixture<PaymentSessionEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
