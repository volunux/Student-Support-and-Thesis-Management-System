import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionEntryCreateComponent } from './payment-session-entry-create.component';

describe('PaymentSessionEntryCreateComponent', () => {
  let component: PaymentSessionEntryCreateComponent;
  let fixture: ComponentFixture<PaymentSessionEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
