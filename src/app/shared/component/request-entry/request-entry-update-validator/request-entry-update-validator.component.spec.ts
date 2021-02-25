import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryUpdateValidatorComponent } from './request-entry-update-validator.component';

describe('RequestEntryUpdateValidatorComponent', () => {
  let component: RequestEntryUpdateValidatorComponent;
  let fixture: ComponentFixture<RequestEntryUpdateValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryUpdateValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryUpdateValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
