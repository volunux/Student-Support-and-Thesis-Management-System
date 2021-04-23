import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateEntryUpdateComponent } from './acmt-entry-update.component';

describe('AccountChangeMessageTemplateEntryUpdateComponent', () => {
  let component: AccountChangeMessageTemplateEntryUpdateComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
