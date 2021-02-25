import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFourDashboardComponent } from './internal-four-dashboard.component';

describe('InternalFourDashboardComponent', () => {
  let component: InternalFourDashboardComponent;
  let fixture: ComponentFixture<InternalFourDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalFourDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalFourDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
