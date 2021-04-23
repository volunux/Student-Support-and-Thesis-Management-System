import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeEntriesComponent } from './rcmtt-entries.component';

describe('RequestChangeMessageTemplateTypeEntriesComponent', () => {
  let component: RequestChangeMessageTemplateTypeEntriesComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
