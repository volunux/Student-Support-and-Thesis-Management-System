import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOtherFieldValidatorComponent } from './user-other-field-validator.component';

describe('UserOtherFieldValidatorComponent', () => {
  let component: UserOtherFieldValidatorComponent;
  let fixture: ComponentFixture<UserOtherFieldValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOtherFieldValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOtherFieldValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
