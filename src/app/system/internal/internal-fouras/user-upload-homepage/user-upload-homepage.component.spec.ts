import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadHomepageComponent } from './user-upload-homepage.component';

describe('UserUploadHomepageComponent', () => {
  let component: UserUploadHomepageComponent;
  let fixture: ComponentFixture<UserUploadHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUploadHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
