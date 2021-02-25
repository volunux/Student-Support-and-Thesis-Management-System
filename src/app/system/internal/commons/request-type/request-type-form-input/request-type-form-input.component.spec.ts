import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeFormInputComponent } from './request-type-form-input.component';

describe('RequestTypeFormInputComponent', () => {
  let component: RequestTypeFormInputComponent;
  let fixture: ComponentFixture<RequestTypeFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
