import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestDashboardComponent } from './acr-dashboard.component';

describe('AccountChangeRequestDashboardComponent', () => {
  let component: AccountChangeRequestDashboardComponent;
  let fixture: ComponentFixture<AccountChangeRequestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
