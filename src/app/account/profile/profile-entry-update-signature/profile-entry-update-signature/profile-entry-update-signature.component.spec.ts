import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntryUpdateSignatureComponent } from './profile-entry-update-signature.component';

describe('ProfileEntryUpdateSignatureComponent', () => {
  let component: ProfileEntryUpdateSignatureComponent;
  let fixture: ComponentFixture<ProfileEntryUpdateSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEntryUpdateSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntryUpdateSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
