import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryUpdateFieldComponent } from './acr-entry-update-field.component';

describe('AccountChangeRequestEntryUpdateFieldComponent', () => {
  let component: AccountChangeRequestEntryUpdateFieldComponent;
  let fixture: ComponentFixture<AccountChangeRequestEntryUpdateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestEntryUpdateFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestEntryUpdateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
