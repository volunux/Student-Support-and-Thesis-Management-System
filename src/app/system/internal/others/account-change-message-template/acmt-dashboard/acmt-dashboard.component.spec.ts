import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateDashboardComponent } from './acmt-dashboard.component';

describe('AccountChangeMessageTemplateDashboardComponent', () => {
  let component: AccountChangeMessageTemplateDashboardComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
