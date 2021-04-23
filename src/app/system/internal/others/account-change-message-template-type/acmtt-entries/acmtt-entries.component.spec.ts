import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeEntriesComponent } from './acmtt-entries.component';

describe('AccountChangeMessageTemplateTypeEntriesComponent', () => {
  let component: AccountChangeMessageTemplateTypeEntriesComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
