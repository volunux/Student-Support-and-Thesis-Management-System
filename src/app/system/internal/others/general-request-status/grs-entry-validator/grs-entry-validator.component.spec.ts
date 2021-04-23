import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusEntryValidatorComponent } from './grs-entry-validator.component';

describe('GeneralRequestStatusEntryValidatorComponent', () => {
  let component: GeneralRequestStatusEntryValidatorComponent;
  let fixture: ComponentFixture<GeneralRequestStatusEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
