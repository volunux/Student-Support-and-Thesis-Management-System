import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCredentialDashboardComponent } from './request-credential-dashboard.component';

describe('RequestCredentialDashboardComponent', () => {
  let component: RequestCredentialDashboardComponent;
  let fixture: ComponentFixture<RequestCredentialDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCredentialDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCredentialDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
