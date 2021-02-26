import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryDashboardComponent } from './gr-entry-dashboard.component';

describe('GeneralRequestEntryDashboardComponent', () => {
  let component: GeneralRequestEntryDashboardComponent;
  let fixture: ComponentFixture<GeneralRequestEntryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
