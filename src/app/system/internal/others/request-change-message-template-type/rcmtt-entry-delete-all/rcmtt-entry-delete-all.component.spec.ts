import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeEntryDeleteAllComponent } from './rcmtt-entry-delete-all.component';

describe('RequestChangeMessageTemplateTypeEntryDeleteAllComponent', () => {
  let component: RequestChangeMessageTemplateTypeEntryDeleteAllComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
