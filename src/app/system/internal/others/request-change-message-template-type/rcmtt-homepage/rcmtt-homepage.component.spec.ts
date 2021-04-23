import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeHomepageComponent } from './rcmtt-homepage.component';

describe('RequestChangeMessageTemplateTypeHomepageComponent', () => {
  let component: RequestChangeMessageTemplateTypeHomepageComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
