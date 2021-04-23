import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeEntryDetailComponent } from './acmtt-entry-detail.component';

describe('AccountChangeMessageTemplateTypeEntryDetailComponent', () => {
  let component: AccountChangeMessageTemplateTypeEntryDetailComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
