import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntryUpdateSignatureHomepageComponent } from './p-entry-update-s-home.component';

describe('ProfileEntryUpdateSignatureHomepageComponent', () => {
  let component: ProfileEntryUpdateSignatureHomepageComponent;
  let fixture: ComponentFixture<ProfileEntryUpdateSignatureHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEntryUpdateSignatureHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntryUpdateSignatureHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
