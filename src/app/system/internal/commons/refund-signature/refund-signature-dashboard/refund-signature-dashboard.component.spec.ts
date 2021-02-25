import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundSignatureDashboardComponent } from './refund-signature-dashboard.component';

describe('RefundSignatureDashboardComponent', () => {
  let component: RefundSignatureDashboardComponent;
  let fixture: ComponentFixture<RefundSignatureDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundSignatureDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundSignatureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
