import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionDashboardComponent } from './payment-session-dashboard.component';

describe('PaymentSessionDashboardComponent', () => {
  let component: PaymentSessionDashboardComponent;
  let fixture: ComponentFixture<PaymentSessionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
