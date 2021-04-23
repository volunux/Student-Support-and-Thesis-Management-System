import { ComponentFixture , TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RequestEntryCreateValidatorComponent } from './request-entry-create-validator.component';
import { FormGroup , FormControl , ReactiveFormsModule , Validators } from '@angular/forms';

describe('RequestEntryCreateValidatorComponent' , () => {
  
  let component : RequestEntryCreateValidatorComponent;
  
  let fixture : ComponentFixture<RequestEntryCreateValidatorComponent>;

  let hostElement : DebugElement = null;

  let validationErrorElement : HTMLDivElement = null;

  let entryForm : FormGroup = new FormGroup({'message' : new FormControl('' , [Validators.required]) });

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
    
      declarations: [ RequestEntryCreateValidatorComponent ] ,

      imports : [ReactiveFormsModule]
    
    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(RequestEntryCreateValidatorComponent);

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

  it('should confirm instance variable' , () => {

    component.systemType = 'Course Registration Request';

    expect(component.systemType).toBeTruthy();

    expect(component.systemType).toBe(component.systemType);

  });

  it('should create Form Control' , () => {

    component.message = entryForm.get('text') as FormControl;

    expect(component.message).toBeTruthy();

  });

  it('should confirm form status' , () => {

    entryForm.markAsDirty();

    expect(entryForm.valid).toBe(false);

  });

  it('should confirm validation errors element' , () => {

    fixture.detectChanges();

    validationErrorElement = hostElement.nativeElement.querySelectorAll('div')[0];

    expect(validationErrorElement.getAttribute('class')).toContain('validation-errors');

  });

  it('should confirm validation error not present' , () => {

    entryForm.get('text').setValue('This is my message');

    expect(entryForm.valid).toBeTruthy();

    fixture.detectChanges();

    validationErrorElement = hostElement.nativeElement.querySelectorAll('div')[0];

    expect(validationErrorElement).not.toBeTruthy();

  });

});
