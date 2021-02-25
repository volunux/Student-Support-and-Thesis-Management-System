import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeFormInputComponent } from './internal-three-form-input.component';

describe('InternalThreeFormInputComponent', () => {
  let component: InternalThreeFormInputComponent;
  let fixture: ComponentFixture<InternalThreeFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
