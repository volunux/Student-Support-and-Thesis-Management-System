import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestEntryCreateHomepageComponent } from './acr-entry-create-homepage.component';

describe('AccountChangeRequestEntryCreateHomepageComponent', () => {
  let component: AccountChangeRequestEntryCreateHomepageComponent;
  let fixture: ComponentFixture<AccountChangeRequestEntryCreateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestEntryCreateHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestEntryCreateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
