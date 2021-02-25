import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryGeneratePasswordComponent } from './general-request-entry-generate-password.component';

describe('GeneralRequestEntryGeneratePasswordComponent', () => {
  let component: GeneralRequestEntryGeneratePasswordComponent;
  let fixture: ComponentFixture<GeneralRequestEntryGeneratePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryGeneratePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryGeneratePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
