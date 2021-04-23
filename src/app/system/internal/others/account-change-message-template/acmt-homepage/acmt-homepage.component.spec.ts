import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateHomepageComponent } from './acmt-homepage.component';

describe('AccountChangeMessageTemplateHomepageComponent', () => {
  let component: AccountChangeMessageTemplateHomepageComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
