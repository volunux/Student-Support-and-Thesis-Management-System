import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntryTypeDashboardComponent } from './profile-entry-type-dashboard.component';

describe('ProfileEntryTypeDashboardComponent', () => {
  let component: ProfileEntryTypeDashboardComponent;
  let fixture: ComponentFixture<ProfileEntryTypeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEntryTypeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntryTypeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
