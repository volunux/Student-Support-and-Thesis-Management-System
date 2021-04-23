import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusFormInputComponent } from './grs-form-input.component';

describe('GeneralRequestStatusFormInputComponent', () => {
  let component: GeneralRequestStatusFormInputComponent;
  let fixture: ComponentFixture<GeneralRequestStatusFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
