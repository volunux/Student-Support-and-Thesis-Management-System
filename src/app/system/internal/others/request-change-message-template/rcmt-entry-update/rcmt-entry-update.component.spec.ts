import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateEntryUpdateComponent } from './rcmt-entry-update.component';

describe('RequestChangeMessageTemplateEntryUpdateComponent', () => {
  let component: RequestChangeMessageTemplateEntryUpdateComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
