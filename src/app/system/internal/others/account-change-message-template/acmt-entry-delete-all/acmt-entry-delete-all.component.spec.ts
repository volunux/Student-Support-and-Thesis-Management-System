import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateEntryDeleteAllComponent } from './acmt-entry-delete-all.component';

describe('AccountChangeMessageTemplateEntryDeleteAllComponent', () => {
  let component: AccountChangeMessageTemplateEntryDeleteAllComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
