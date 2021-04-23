import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryDeleteAllComponent } from './acr-entry-delete-all.component';

describe('AccountChangeRequestEntryDeleteAllComponent', () => {
  let component: AccountChangeRequestEntryDeleteAllComponent;
  let fixture: ComponentFixture<AccountChangeRequestEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
