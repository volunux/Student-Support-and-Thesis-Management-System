import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateEntryDetailComponent } from './rcmt-entry-detail.component';

describe('RequestChangeMessageTemplateEntryDetailComponent', () => {
  let component: RequestChangeMessageTemplateEntryDetailComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
