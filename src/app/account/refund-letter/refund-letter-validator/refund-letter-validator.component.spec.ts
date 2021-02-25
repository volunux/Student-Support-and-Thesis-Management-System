import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundLetterValidatorComponent } from './refund-letter-validator.component';

describe('RefundLetterValidatorComponent', () => {
  let component: RefundLetterValidatorComponent;
  let fixture: ComponentFixture<RefundLetterValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundLetterValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundLetterValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
