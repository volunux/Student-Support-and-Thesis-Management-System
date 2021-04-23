import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeEntryUpdateComponent } from './rcmtt-entry-update.component';

describe('RequestChangeMessageTemplateTypeEntryUpdateComponent', () => {
  let component: RequestChangeMessageTemplateTypeEntryUpdateComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
