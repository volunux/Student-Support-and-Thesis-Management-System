import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeMessageTemplateFormInputComponent } from './rcmt-form-input.component';

describe('RequestChangeMessageTemplateFormInputComponent', () => {
  let component: RequestChangeMessageTemplateFormInputComponent;
  let fixture: ComponentFixture<RequestChangeMessageTemplateFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeMessageTemplateFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeMessageTemplateFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
