import { ComponentFixture , TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { EntryCommentValidatorComponent } from './entry-comment-validator.component';
import { FormGroup , FormControl , ReactiveFormsModule , Validators } from '@angular/forms';

describe('EntryCommentValidatorComponent' , () => {
  
  let component : EntryCommentValidatorComponent;
  
  let fixture : ComponentFixture<EntryCommentValidatorComponent>;

  let hostElement : DebugElement = null;

  let validationErrorElement : HTMLDivElement = null;

  let entryForm : FormGroup = new FormGroup({'text' : new FormControl('' , [Validators.required]) });

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
    
      declarations: [ EntryCommentValidatorComponent ] ,

      imports : [ReactiveFormsModule]
    
    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(EntryCommentValidatorComponent);

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

    expect(component.text).toBeTruthy();

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

    entryForm.get('text').setValue('This is my comment');

    expect(entryForm.valid).toBeTruthy();

    fixture.detectChanges();

    validationErrorElement = hostElement.nativeElement.querySelectorAll('div')[0];

    expect(validationErrorElement).not.toBeTruthy();

  });

});
