import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInternalFormInputValidatorComponent } from './gi-form-input-validator.component';

describe('GeneralInternalFormInputValidatorComponent', () => {
  let component: GeneralInternalFormInputValidatorComponent;
  let fixture: ComponentFixture<GeneralInternalFormInputValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInternalFormInputValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInternalFormInputValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
