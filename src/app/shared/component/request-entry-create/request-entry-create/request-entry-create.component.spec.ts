import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component , DebugElement , NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RequestEntryCreateComponent } from './request-entry-create.component';
import { FormControl , FormGroup , Validators , ReactiveFormsModule } from '@angular/forms';

@Component({

  'selector' : 'app-attachment-upload' ,

  'template' : ''

})

class AttachmentUploadComponentTestDrive {

  constructor() {


  }

  public $$file : { [key : string] : any };

}

describe('RequestEntryCreateComponent' , () => {
  
  let component : RequestEntryCreateComponent;

  let attachmentComponent : AttachmentUploadComponentTestDrive = null;
  
  let fixture : ComponentFixture<RequestEntryCreateComponent>;

  let hostElement : DebugElement = null;

  let attachmentComponentElement : HTMLElement = null;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ RequestEntryCreateComponent , AttachmentUploadComponentTestDrive ] ,

      imports : [ReactiveFormsModule] ,

      schemas : [NO_ERRORS_SCHEMA]

    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(RequestEntryCreateComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

    expect(hostElement).toBeNull();

    expect(attachmentComponent).toBeNull();

    hostElement = fixture.debugElement;

    attachmentComponent = TestBed.inject(AttachmentUploadComponentTestDrive);

    attachmentComponentElement = hostElement.query(By.directive(AttachmentUploadComponentTestDrive)).nativeElement;

    expect(hostElement).toBeTruthy();

    expect(attachmentComponent).toBeDefined();

    expect(attachmentComponentElement).toBeUndefined();

  });

  it('should confirm instance variables' , () => {

    expect(component.systemType).toBeUndefined();

    expect(component.systemGuideline).toBeUndefined();

    expect(component.view).toBeUndefined();

    expect(component.entryCreateForm).toBeUndefined();

    expect(component.inputFileControl).toBeUndefined();

    expect(component.attachmentConfig).toBeUndefined();

    expect(component.attachments).toBeUndefined();

    expect(component.uploadConfigU).toBeUndefined();

    expect(component.fileInputs).toBeUndefined();

    expect(component.processEntry).toBeTruthy();

    expect(component.submission).toBeFalse();

    expect(component.isFormSubmitted).toBeFalse();

    expect(component.isFormProcessing).toBeFalse();

    expect(component.entryCreatedOb).toBeDefined();

    expect(component.$myFiles).toBeDefined();

    expect(component.$myFiles.length).toEqual(0);

    expect(component.message).toBeDefined();

    expect(component.message).toBeFalsy();

    expect(component.isFormValid).toBeDefined();

    expect(component.isFormValid).toBeFalsy();

    expect(component.notificationAvailable).toBeDefined();

    expect(component.notificationMessage).toBeDefined();

    expect(component.notificationAvailable).toBe(false);

    expect(component.notificationMessage).toBe('');

  });

  it('should set instance variables' , () => {

    component.systemType = 'Course Registration Request';

    component.systemGuideline = 'request';

    component.view = 'gr';

    component.inputFileControl = [

    {'label' : 'Photo I' ,

    'key' : 'photos' ,

    'accepts' : 'image/*' ,

    'controlType' : 'file' }];

    component.attachmentConfig = {

    'name' : 'Image' ,

    'type' : 'image'
  };

    component.uploadConfigU = {
  
  'add' : 'user-upload/entry/create' ,

  'remove' : 'o/photo' ,

  'sign' : 'o/sign/photo'
};
      expect(component.systemType).toBeDefined();

      expect(component.systemGuideline).toBeDefined();

      expect(component.view).toBeDefined();

      expect(component.inputFileControl).toBeDefined();

      expect(component.attachmentConfig).toBeDefined();

      expect(component.uploadConfigU).toBeDefined();

      fixture.detectChanges();

      expect(attachmentComponentElement).toBeDefined();
  });

  it('should confirm form validity' , () => {

    component.entryCreateForm = new FormGroup({'message' : new FormControl('' , [Validators.required])});

    expect(component.entryCreateForm.valid).toBeFalse();

    expect(component.isFormValid).toBeFalse();

    component.entryCreateForm.get('message').setValue('This is my message');

    expect(component.entryCreateForm.get('message').valid).toBeTrue();

    expect(component.entryCreateForm.valid).toBeTrue();

    expect(component.isFormValid).toBeTrue();

  });

  it('should confirm createEntry behavior without attachments' , () => {

    let createEntry = spyOn(component , 'createEntry');

    let messageBody = {'message' : 'This is my message'};

    component.createEntry(messageBody);

    expect(component.submission).toBeTrue();

    expect(component.isFormProcessing).toBeTrue();

    expect(component.isFormSubmitted).toBeTrue();

    expect(createEntry).toHaveBeenCalled();

    expect(createEntry).toHaveBeenCalledWith(messageBody);

    let processEntry = spyOn(component.processEntry , 'emit');

    expect(processEntry).toHaveBeenCalled();

    expect(processEntry).toHaveBeenCalledWith(messageBody);

  });

  it('should confirm createEntry behavior with attachments' , () => {

    let createEntry = spyOn(component , 'createEntry');

    let messageBody : { [key : string] : any } = {'message' : 'This is my message'};

    attachmentComponent.$$file = {

      'location' : 'https://www.s3.amazon.com'
    };

    component.createEntry(messageBody);

    expect(component.submission).toBeTrue();

    expect(component.isFormProcessing).toBeTrue();

    expect(component.isFormSubmitted).toBeTrue();

    expect(createEntry).toHaveBeenCalled();

    expect(createEntry).toHaveBeenCalledWith(messageBody);

    let processEntry = spyOn(component.processEntry , 'emit');

    expect(processEntry).toHaveBeenCalled();

    messageBody.documents = [attachmentComponent.$$file];

    expect(processEntry).toHaveBeenCalledWith(messageBody);

  });

});
