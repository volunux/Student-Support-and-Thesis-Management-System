import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateEntryValidatorComponent } from './acmt-entry-validator.component';

describe('AccountChangeMessageTemplateEntryValidatorComponent', () => {
  let component: AccountChangeMessageTemplateEntryValidatorComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateEntryValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateEntryValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateEntryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
