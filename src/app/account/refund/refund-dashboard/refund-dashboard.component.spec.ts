import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundDashboardComponent } from './refund-dashboard.component';

describe('RefundDashboardComponent', () => {
  let component: RefundDashboardComponent;
  let fixture: ComponentFixture<RefundDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
