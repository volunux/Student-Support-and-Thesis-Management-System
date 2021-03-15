import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryMessageTemplateComponent } from './request-entry-message-template.component';

describe('RequestEntryMessageTemplateComponent', () => {
  let component: RequestEntryMessageTemplateComponent;
  let fixture: ComponentFixture<RequestEntryMessageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryMessageTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryMessageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
