import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateEntryCreateComponent } from './acmt-entry-create.component';

describe('AccountChangeMessageTemplateEntryCreateComponent', () => {
  let component: AccountChangeMessageTemplateEntryCreateComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
