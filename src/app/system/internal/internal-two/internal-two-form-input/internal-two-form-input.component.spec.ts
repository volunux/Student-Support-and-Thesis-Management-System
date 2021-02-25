import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoFormInputComponent } from './internal-two-form-input.component';

describe('InternalTwoFormInputComponent', () => {
  let component: InternalTwoFormInputComponent;
  let fixture: ComponentFixture<InternalTwoFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
