import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateEntryDeleteComponent } from './acmt-entry-delete.component';

describe('AccountChangeMessageTemplateEntryDeleteComponent', () => {
  let component: AccountChangeMessageTemplateEntryDeleteComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
