import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusDashboardComponent } from './grs-dashboard.component';

describe('GeneralRequestStatusDashboardComponent', () => {
  let component: GeneralRequestStatusDashboardComponent;
  let fixture: ComponentFixture<GeneralRequestStatusDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
