import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeEntryValidatorComponent } from './request-type-entry-validator.component';

describe('RequestTypeEntryValidatorComponent', () => {
  let component: RequestTypeEntryValidatorComponent;
  let fixture: ComponentFixture<RequestTypeEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
