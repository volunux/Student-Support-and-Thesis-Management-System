import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeDashboardComponent } from './request-type-dashboard.component';

describe('RequestTypeDashboardComponent', () => {
  let component: RequestTypeDashboardComponent;
  let fixture: ComponentFixture<RequestTypeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
