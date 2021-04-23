import { ComponentFixture , TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RequestEntryUpdateValidatorComponent } from './request-entry-update-validator.component';
import { FormGroup , FormControl , ReactiveFormsModule , Validators } from '@angular/forms';

describe('RequestEntryUpdateValidatorComponent' , () => {
  
  let component : RequestEntryUpdateValidatorComponent;
  
  let fixture : ComponentFixture<RequestEntryUpdateValidatorComponent>;

  let hostElement : DebugElement = null;

  let validationErrorElement : HTMLDivElement[] = null;

  let entryForm : FormGroup = new FormGroup({

    'text' : new FormControl('' , [Validators.required]) , 

    'status' : new FormControl('' , [Validators.required]) ,

    'stage' : new FormControl('' , [Validators.required]) , 

    'request_message_template' : new FormControl('' , []) 

  });

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
    
      declarations: [ RequestEntryUpdateValidatorComponent ] ,

      imports : [ReactiveFormsModule]
    
    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(RequestEntryUpdateValidatorComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should confirm variable and properties nullity' , () => {

    expect(hostElement).toBeNull();

    expect(validationErrorElement).toBeNull();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

    hostElement = fixture.debugElement;

    expect(hostElement).toBeTruthy();

  });

  it('should create Form Control' , () => {

    component.text = entryForm.get('text') as FormControl;

    component.status = entryForm.get('status') as FormControl;

    component.stage = entryForm.get('stage') as FormControl;

    component.request_message_template = entryForm.get('request_message_template') as FormControl;

    expect(component.text).toBeTruthy();

    expect(component.status).toBeTruthy();

    expect(component.stage).toBeTruthy();

    expect(component.request_message_template).toBeTruthy();

  });

  it('should confirm form status' , () => {

    entryForm.markAsDirty();

    expect(entryForm.valid).toBe(false);

  });

  it('should confirm validation errors element' , () => {

    fixture.detectChanges();

    validationErrorElement = hostElement.nativeElement.querySelectorAll('div');

    expect(validationErrorElement.length).toBeGreaterThan(2);

    let oneDivElement : HTMLDivElement = hostElement.nativeElement.querySelectorAll('div')[0];

    expect(oneDivElement.getAttribute('class')).toContain('validation-errors');



  });

  it('should confirm validation error not present' , () => {

    entryForm.get('text').setValue('This is my reply');

    entryForm.get('status').setValue(1);

    entryForm.get('stage').setValue(1);

    expect(entryForm.valid).toBeTruthy();

    fixture.detectChanges();

    let oneDivElement : HTMLDivElement = hostElement.nativeElement.querySelectorAll('div')[0];

    expect(validationErrorElement).not.toBeTruthy();

  });

});
