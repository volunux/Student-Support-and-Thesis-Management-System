import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeEntryCreateComponent } from './acmtt-entry-create.component';

describe('AccountChangeMessageTemplateTypeEntryCreateComponent', () => {
  let component: AccountChangeMessageTemplateTypeEntryCreateComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
