import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestDashboardComponent } from './gr-dashboard.component';

describe('GeneralRequestDashboardComponent', () => {
  let component: GeneralRequestDashboardComponent;
  let fixture: ComponentFixture<GeneralRequestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
