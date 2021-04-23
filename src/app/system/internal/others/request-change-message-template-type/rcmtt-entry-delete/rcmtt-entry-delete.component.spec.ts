import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeEntryDeleteComponent } from './rcmtt-entry-delete.component';

describe('RequestChangeMessageTemplateTypeEntryDeleteComponent', () => {
  let component: RequestChangeMessageTemplateTypeEntryDeleteComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
