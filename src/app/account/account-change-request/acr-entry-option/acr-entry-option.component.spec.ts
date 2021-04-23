import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryOptionComponent } from './acr-entry-option.component';

describe('AccountChangeRequestEntryOptionComponent', () => {
  let component: AccountChangeRequestEntryOptionComponent;
  let fixture: ComponentFixture<AccountChangeRequestEntryOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestEntryOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestEntryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
