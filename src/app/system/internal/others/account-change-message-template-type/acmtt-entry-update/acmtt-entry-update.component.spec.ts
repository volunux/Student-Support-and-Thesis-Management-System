import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeEntryUpdateComponent } from './acmtt-entry-update.component';

describe('AccountChangeMessageTemplateTypeEntryUpdateComponent', () => {
  let component: AccountChangeMessageTemplateTypeEntryUpdateComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
