import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionEntryDeleteComponent } from './payment-session-entry-delete.component';

describe('PaymentSessionEntryDeleteComponent', () => {
  let component: PaymentSessionEntryDeleteComponent;
  let fixture: ComponentFixture<PaymentSessionEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
