import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntryUpdatePhotoComponent } from './profile-entry-update-photo.component';

describe('ProfileEntryUpdatePhotoComponent', () => {
  let component: ProfileEntryUpdatePhotoComponent;
  let fixture: ComponentFixture<ProfileEntryUpdatePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEntryUpdatePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntryUpdatePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
