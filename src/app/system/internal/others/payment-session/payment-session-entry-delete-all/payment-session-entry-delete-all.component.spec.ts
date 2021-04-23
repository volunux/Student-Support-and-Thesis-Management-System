import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionEntryDeleteAllComponent } from './payment-session-entry-delete-all.component';

describe('PaymentSessionEntryDeleteAllComponent', () => {
  let component: PaymentSessionEntryDeleteAllComponent;
  let fixture: ComponentFixture<PaymentSessionEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
