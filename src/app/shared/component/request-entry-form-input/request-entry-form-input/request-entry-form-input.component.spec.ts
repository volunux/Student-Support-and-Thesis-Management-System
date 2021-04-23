import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryFormInputComponent } from './request-entry-form-input.component';

describe('RequestEntryFormInputComponent', () => {
  let component: RequestEntryFormInputComponent;
  let fixture: ComponentFixture<RequestEntryFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
