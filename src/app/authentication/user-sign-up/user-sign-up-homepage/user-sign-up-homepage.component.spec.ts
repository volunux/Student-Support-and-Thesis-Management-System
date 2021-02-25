import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUpHomepageComponent } from './user-sign-up-homepage.component';

describe('UserSignUpHomepageComponent', () => {
  let component: UserSignUpHomepageComponent;
  let fixture: ComponentFixture<UserSignUpHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignUpHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignUpHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
