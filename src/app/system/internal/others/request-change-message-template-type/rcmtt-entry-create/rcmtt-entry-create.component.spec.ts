import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeEntryCreateComponent } from './rcmtt-entry-create.component';

describe('RequestChangeMessageTemplateTypeEntryCreateComponent', () => {
  let component: RequestChangeMessageTemplateTypeEntryCreateComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
