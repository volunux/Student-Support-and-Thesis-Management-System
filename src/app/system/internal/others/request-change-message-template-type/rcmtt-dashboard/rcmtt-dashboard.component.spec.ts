import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeDashboardComponent } from './rcmtt-dashboard.component';

describe('RequestChangeMessageTemplateTypeDashboardComponent', () => {
  let component: RequestChangeMessageTemplateTypeDashboardComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
