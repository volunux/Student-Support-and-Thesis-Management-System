import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateEntryCreateComponent } from './rcmt-entry-create.component';

describe('RequestChangeMessageTemplateEntryCreateComponent', () => {
  let component: RequestChangeMessageTemplateEntryCreateComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
