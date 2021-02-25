import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadDashboardComponent } from './user-upload-dashboard.component';

describe('UserUploadDashboardComponent', () => {
  let component: UserUploadDashboardComponent;
  let fixture: ComponentFixture<UserUploadDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUploadDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
