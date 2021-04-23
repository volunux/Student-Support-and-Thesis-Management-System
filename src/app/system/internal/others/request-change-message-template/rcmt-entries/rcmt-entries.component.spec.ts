import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateEntriesComponent } from './rcmt-entries.component';

describe('RequestChangeMessageTemplateEntriesComponent', () => {
  let component: RequestChangeMessageTemplateEntriesComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
