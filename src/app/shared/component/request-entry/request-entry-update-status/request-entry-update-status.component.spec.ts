import { ComponentFixture , TestBed } from '@angular/core/testing';
import { DebugElement , NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControl , FormGroup , Validators , ReactiveFormsModule } from '@angular/forms';
import { RequestEntryUpdateStatusComponent } from './request-entry-update-status.component';

describe('RequestEntryUpdateStatusComponent' , () => {
  
  let component : RequestEntryUpdateStatusComponent;

  let fixture : ComponentFixture<RequestEntryUpdateStatusComponent>;

  let hostElement : DebugElement = null;

  let selectElement : HTMLSelectElement = null;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ RequestEntryUpdateStatusComponent ] ,

      imports : [ReactiveFormsModule] ,

      schemas : [NO_ERRORS_SCHEMA]

    }).compileComponents();
  
  });

  beforeEach(() => {
  
    fixture = TestBed.createComponent(RequestEntryUpdateStatusComponent);
  
    component = fixture.componentInstance;
  
    fixture.detectChanges();
  
  });

  it('should create', () => {
  
    expect(component).toBeTruthy();
 
    expect(hostElement).toBeNull();

    expect(selectElement).toBeNull();

    hostElement = fixture.debugElement;

    expect(hostElement).toBeTruthy();

  });

  it('should confirm instance variables' , () => {

    expect(component.entry).toBeUndefined();

    expect(component.entryForm).toBeUndefined();

    expect(component.entries).toBeUndefined();

    expect(component.estatuses).toBeUndefined();

    expect(component.eother).toBeUndefined();

    expect(component.status).not.toBeTruthy();

    expect(component.permanentData).toBeDefined();

    expect(component.permanentProps).toBeDefined();

  });

  it('should set instance variables' , () => {

    component.entry = {'message' : 'This is my request'};

    component.entries = {'Status' : [{'name' : 'Pending' , '_id' : 1} , {'name' : 'Fulfill' , '_id' : 2}]};

    component.entryForm = new FormGroup({'text' : new FormControl('' , [Validators.required]) , 'status' : new FormControl('' , [Validators.required])});

    component.entryForm.markAsDirty();

    expect(component.entryForm.valid).toBeFalse();

  });

  it('should confirm other behaviors' , () => {

    component.ngOnInit();

    expect(component.estatuses).toBeTruthy();

    expect(component.estatuses.length).toBe(2);

    expect(component.eother).toBeTruthy();

  });

  it('should check form elements' , () => {

    fixture.detectChanges();

    let labelElement : HTMLLabelElement = hostElement.nativeElement.querySelector('input[for="status"]');

    expect(labelElement.innerText).toContain('Entry Status');

    selectElement = hostElement.nativeElement.querySelector('select[name="status"]');

    component.entryForm.get('status').setValue('1');

    component.entry.get('text').setValue('This is my own comment');

    expect(selectElement.value).toBe('1');

    expect(selectElement.textContent).toContain('Pending');

    expect(component.entryForm.valid).toBeTrue();

  });

  it('validate form status' , () => {

    selectElement.value = '';

    selectElement.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(component.entryForm.valid).toBeFalse();

    expect(component.entryForm.get('text').valid).toBeFalse();

  });

});
