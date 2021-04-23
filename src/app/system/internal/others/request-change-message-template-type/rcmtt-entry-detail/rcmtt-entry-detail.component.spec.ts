import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeEntryDetailComponent } from './rcmtt-entry-detail.component';

describe('RequestChangeMessageTemplateTypeEntryDetailComponent', () => {
  let component: RequestChangeMessageTemplateTypeEntryDetailComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
