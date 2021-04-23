import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateEntryDeleteAllComponent } from './rcmt-entry-delete-all.component';

describe('RequestChangeMessageTemplateEntryDeleteAllComponent', () => {
  let component: RequestChangeMessageTemplateEntryDeleteAllComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
