import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeMessageTemplateTypeDashboardComponent } from './acmtt-dashboard.component';

describe('AccountChangeMessageTemplateTypeDashboardComponent', () => {
  let component: AccountChangeMessageTemplateTypeDashboardComponent;
  let fixture: ComponentFixture<AccountChangeMessageTemplateTypeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeMessageTemplateTypeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeMessageTemplateTypeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
