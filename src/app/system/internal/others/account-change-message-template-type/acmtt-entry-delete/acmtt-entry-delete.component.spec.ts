import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeEntryDeleteComponent } from './acmtt-entry-delete.component';

describe('AccountChangeMessageTemplateTypeEntryDeleteComponent', () => {
  let component: AccountChangeMessageTemplateTypeEntryDeleteComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
