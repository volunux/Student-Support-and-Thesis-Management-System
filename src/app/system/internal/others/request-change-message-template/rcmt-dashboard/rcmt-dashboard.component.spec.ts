import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateDashboardComponent } from './rcmt-dashboard.component';

describe('RequestChangeMessageTemplateDashboardComponent', () => {
  let component: RequestChangeMessageTemplateDashboardComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
