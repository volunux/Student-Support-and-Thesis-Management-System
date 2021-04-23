import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateTypeFormInputComponent } from './rcmtt-form-input.component';

describe('RequestChangeMessageTemplateTypeFormInputComponent', () => {
  let component: RequestChangeMessageTemplateTypeFormInputComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateTypeFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateTypeFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateTypeFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
