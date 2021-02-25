import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneDashboardComponent } from './internal-one-dashboard.component';

describe('InternalOneDashboardComponent', () => {
  let component: InternalOneDashboardComponent;
  let fixture: ComponentFixture<InternalOneDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
