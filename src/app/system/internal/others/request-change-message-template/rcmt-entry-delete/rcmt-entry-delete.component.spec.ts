import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateEntryDeleteComponent } from './rcmt-entry-delete.component';

describe('RequestChangeMessageTemplateEntryDeleteComponent', () => {
  let component: RequestChangeMessageTemplateEntryDeleteComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
