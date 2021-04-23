import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeHomepageComponent } from './acmtt-homepage.component';

describe('AccountChangeMessageTemplateTypeHomepageComponent', () => {
  let component: AccountChangeMessageTemplateTypeHomepageComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
