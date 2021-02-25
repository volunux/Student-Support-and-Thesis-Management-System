import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeDashboardComponent } from './internal-three-dashboard.component';

describe('InternalThreeDashboardComponent', () => {
  let component: InternalThreeDashboardComponent;
  let fixture: ComponentFixture<InternalThreeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
