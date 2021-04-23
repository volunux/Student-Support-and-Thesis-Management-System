import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntriesComponent } from './acr-entries.component';

describe('AccountChangeRequestEntriesComponent', () => {
  let component: AccountChangeRequestEntriesComponent;
  let fixture: ComponentFixture<AccountChangeRequestEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
