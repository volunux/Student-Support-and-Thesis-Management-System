import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestDashboardComponent } from './mr-dashboard.component';

describe('MiscRequestDashboardComponent', () => {
  let component: MiscRequestDashboardComponent;
  let fixture: ComponentFixture<MiscRequestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
