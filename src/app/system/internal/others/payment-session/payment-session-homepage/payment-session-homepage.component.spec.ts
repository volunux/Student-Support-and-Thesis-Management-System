import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionHomepageComponent } from './payment-session-homepage.component';

describe('PaymentSessionHomepageComponent', () => {
  let component: PaymentSessionHomepageComponent;
  let fixture: ComponentFixture<PaymentSessionHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
