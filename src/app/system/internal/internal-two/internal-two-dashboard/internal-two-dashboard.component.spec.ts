import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoDashboardComponent } from './internal-two-dashboard.component';

describe('InternalTwoDashboardComponent', () => {
  let component: InternalTwoDashboardComponent;
  let fixture: ComponentFixture<InternalTwoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
