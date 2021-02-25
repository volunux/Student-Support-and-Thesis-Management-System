import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignInHomepageComponent } from './user-sign-in-homepage.component';

describe('UserSignInHomepageComponent', () => {
  let component: UserSignInHomepageComponent;
  let fixture: ComponentFixture<UserSignInHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignInHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignInHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
