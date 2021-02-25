import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryCredentialValidatorComponent } from './general-request-entry-credential-validator.component';

describe('GeneralRequestEntryCredentialValidatorComponent', () => {
  let component: GeneralRequestEntryCredentialValidatorComponent;
  let fixture: ComponentFixture<GeneralRequestEntryCredentialValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryCredentialValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryCredentialValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
