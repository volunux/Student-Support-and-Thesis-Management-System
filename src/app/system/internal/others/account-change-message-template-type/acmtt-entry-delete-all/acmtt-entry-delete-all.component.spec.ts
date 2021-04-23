import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeEntryDeleteAllComponent } from './acmtt-entry-delete-all.component';

describe('AccountChangeMessageTemplateTypeEntryDeleteAllComponent', () => {
  let component: AccountChangeMessageTemplateTypeEntryDeleteAllComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
