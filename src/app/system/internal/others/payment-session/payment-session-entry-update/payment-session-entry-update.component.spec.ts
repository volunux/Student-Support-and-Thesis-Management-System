import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionEntryUpdateComponent } from './payment-session-entry-update.component';

describe('PaymentSessionEntryUpdateComponent', () => {
  let component: PaymentSessionEntryUpdateComponent;
  let fixture: ComponentFixture<PaymentSessionEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
