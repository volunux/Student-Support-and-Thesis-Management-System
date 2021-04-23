import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateEntriesComponent } from './acmt-entries.component';

describe('AccountChangeMessageTemplateEntriesComponent', () => {
  let component: AccountChangeMessageTemplateEntriesComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
