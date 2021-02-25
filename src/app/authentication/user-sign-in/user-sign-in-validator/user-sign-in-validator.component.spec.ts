import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignInValidatorComponent } from './user-sign-in-validator.component';

describe('UserSignInValidatorComponent', () => {
  let component: UserSignInValidatorComponent;
  let fixture: ComponentFixture<UserSignInValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignInValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignInValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
