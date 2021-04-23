import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryFormInputValidatorComponent } from './request-entry-form-input-validator.component';

describe('RequestEntryFormInputValidatorComponent', () => {
  let component: RequestEntryFormInputValidatorComponent;
  let fixture: ComponentFixture<RequestEntryFormInputValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryFormInputValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryFormInputValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
