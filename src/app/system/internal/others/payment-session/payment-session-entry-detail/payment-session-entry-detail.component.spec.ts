import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionEntryDetailComponent } from './payment-session-entry-detail.component';

describe('PaymentSessionEntryDetailComponent', () => {
  let component: PaymentSessionEntryDetailComponent;
  let fixture: ComponentFixture<PaymentSessionEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
