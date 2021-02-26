import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntryUpdatePhotoHomepageComponent } from './p-entry-update-p-home.component';

describe('ProfileEntryUpdatePhotoHomepageComponent', () => {
  let component: ProfileEntryUpdatePhotoHomepageComponent;
  let fixture: ComponentFixture<ProfileEntryUpdatePhotoHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEntryUpdatePhotoHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntryUpdatePhotoHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
