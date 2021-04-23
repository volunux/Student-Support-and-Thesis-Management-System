import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryDetailComponent } from './acr-entry-detail.component';

describe('AccountChangeRequestEntryDetailComponent', () => {
  let component: AccountChangeRequestEntryDetailComponent;
  let fixture: ComponentFixture<AccountChangeRequestEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
