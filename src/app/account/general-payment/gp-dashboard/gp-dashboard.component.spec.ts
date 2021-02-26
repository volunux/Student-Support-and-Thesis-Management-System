import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentDashboardComponent } from './gp-dashboard.component';

describe('GeneralPaymentDashboardComponent', () => {
  let component: GeneralPaymentDashboardComponent;
  let fixture: ComponentFixture<GeneralPaymentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
