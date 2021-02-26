import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentEntryDashboardComponent } from './gp-entry-dashboard.component';

describe('GeneralPaymentEntryDashboardComponent', () => {
  let component: GeneralPaymentEntryDashboardComponent;
  let fixture: ComponentFixture<GeneralPaymentEntryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentEntryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentEntryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
