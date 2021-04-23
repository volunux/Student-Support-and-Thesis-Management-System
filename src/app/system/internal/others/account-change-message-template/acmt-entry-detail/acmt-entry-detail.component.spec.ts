import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateEntryDetailComponent } from './acmt-entry-detail.component';

describe('AccountChangeMessageTemplateEntryDetailComponent', () => {
  let component: AccountChangeMessageTemplateEntryDetailComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
