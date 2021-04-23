import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestHomepageComponent } from './acr-homepage.component';

describe('AccountChangeRequestHomepageComponent', () => {
  let component: AccountChangeRequestHomepageComponent;
  let fixture: ComponentFixture<AccountChangeRequestHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
