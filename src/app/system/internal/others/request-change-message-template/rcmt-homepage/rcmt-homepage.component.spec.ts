import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateHomepageComponent } from './rcmt-homepage.component';

describe('RequestChangeMessageTemplateHomepageComponent', () => {
  let component: RequestChangeMessageTemplateHomepageComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
