import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryCreateComponent } from './acr-entry-create.component';

describe('AccountChangeRequestEntryCreateComponent', () => {
  let component: AccountChangeRequestEntryCreateComponent;
  let fixture: ComponentFixture<AccountChangeRequestEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
