import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOtherFieldComponent } from './user-other-field.component';

describe('UserOtherFieldComponent', () => {
  let component: UserOtherFieldComponent;
  let fixture: ComponentFixture<UserOtherFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOtherFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOtherFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
