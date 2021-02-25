import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryCreateValidatorComponent } from './request-entry-create-validator.component';

describe('RequestEntryCreateValidatorComponent', () => {
  let component: RequestEntryCreateValidatorComponent;
  let fixture: ComponentFixture<RequestEntryCreateValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryCreateValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryCreateValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
