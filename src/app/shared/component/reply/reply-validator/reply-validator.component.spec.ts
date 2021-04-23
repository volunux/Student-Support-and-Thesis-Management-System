import { ComponentFixture , TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ReplyValidatorComponent } from './reply-validator.component';
import { FormGroup , FormControl , ReactiveFormsModule , Validators } from '@angular/forms';

describe('ReplyValidatorComponent' , () => {
  
  let component : ReplyValidatorComponent;
  
  let fixture : ComponentFixture<ReplyValidatorComponent>;

  let hostElement : DebugElement = null;

  let validationErrorElement : HTMLDivElement = null;

  let entryForm : FormGroup = new FormGroup({'text' : new FormControl('' , [Validators.required]) , 'comment_author_name' : new FormControl('' , [Validators.required]) });

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
    
      declarations: [ ReplyValidatorComponent ] ,

      imports : [ReactiveFormsModule]
    
    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(ReplyValidatorComponent);

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

    component.comment_author_name = entryForm.get('comment_author_name') as FormControl;

    expect(component.text).toBeTruthy();

    expect(component.comment_author_name).toBeTruthy();

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

    entryForm.get('text').setValue('This is my reply');

    entryForm.get('comment_author_name').setValue('Yusuf Yusuf Musa');

    expect(entryForm.valid).toBeTruthy();

    fixture.detectChanges();

    validationErrorElement = hostElement.nativeElement.querySelectorAll('div')[0];

    expect(validationErrorElement).not.toBeTruthy();

  });

});
