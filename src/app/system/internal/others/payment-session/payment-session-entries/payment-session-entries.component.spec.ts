import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSessionEntriesComponent } from './payment-session-entries.component';

describe('PaymentSessionEntriesComponent', () => {
  let component: PaymentSessionEntriesComponent;
  let fixture: ComponentFixture<PaymentSessionEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSessionEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSessionEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
