import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneFormInputComponent } from './internal-one-form-input.component';

describe('InternalOneFormInputComponent', () => {
  let component: InternalOneFormInputComponent;
  let fixture: ComponentFixture<InternalOneFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
