import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeEntryValidatorComponent } from './acmtt-entry-validator.component';

describe('AccountChangeMessageTemplateTypeEntryValidatorComponent', () => {
  let component: AccountChangeMessageTemplateTypeEntryValidatorComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
