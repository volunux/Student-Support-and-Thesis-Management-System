import { ComponentFixture, ComponentFixtureAutoDetect , TestBed , fakeAsync , tick , waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EntryReplyCreateComponent } from './entry-reply-create.component';
import { ReplyCommentDetailComponent } from '../reply-comment-detail/reply-comment-detail.component';
import { NotificationScreenComponent } from '../../../../general/notification-screen/notification-screen.component';
import { ViewDescriptionComponent } from '../../../../general/view-description/view-description.component';
import { NotificationMessageService } from '../../notification/notification-message.service';
import { ReplyCreateService } from '../reply-create.service';
import { Observable , Subject } from 'rxjs';
import { FormControl , FormGroup , Validators } from '@angular/forms';

let replyCreateServiceStub : Partial<ReplyCreateService> = {

  'isEntryCreated' : new Subject<boolean>() ,

  'isEntryCreated$' : new Observable<boolean>()
};

let notificationMessageServiceStub : Partial<NotificationMessageService> = {

  'notificationAvailable' : false ,

  'notificationMessage' : ''
};

describe('EntryReplyCreateComponent', () => {

  let component : EntryReplyCreateComponent = null;
  
  let fixture : ComponentFixture<EntryReplyCreateComponent> = null;

  let hostElement : HTMLElement = null;

  let notificationScreenComponent : NotificationScreenComponent = null;

  let viewDescriptionComponent : ViewDescriptionComponent = null;

  let notificationMessageService : NotificationMessageService = null;

  let replyCreateService : ReplyCreateService = null;

  let viewDescriptionElement : HTMLElement = null;

  let notificationScreenElement : HTMLElement = null;

  let replyCommentDetailElement : HTMLElement = null;

  let textAreaElement : HTMLTextAreaElement = null;

  let submitButtonElement : HTMLButtonElement = null;

  let userEntry = {

    'text' : 'This is my reply'
  };

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({

      declarations: [ EntryReplyCreateComponent  , ViewDescriptionComponent , NotificationScreenComponent , ReplyCommentDetailComponent] ,

      providers : [

          { provide : ComponentFixtureAutoDetect , useValue : true } ,

          { provide : ReplyCreateService , useValue : replyCreateServiceStub } ,

          { provide : NotificationMessageService , useValue : notificationMessageServiceStub }
       ] ,

       schemas : [NO_ERRORS_SCHEMA]

    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(EntryReplyCreateComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

    expect(fixture).toBeTruthy();

  });

  it('should confirm properties definition' , () => {

    expect(hostElement).toBeNull();

    expect(component.systemType).toBeUndefined();

    expect(component.view).toBeUndefined();

    expect(component.entry).toBeUndefined();

    expect(component.entryCreateForm).toBeUndefined();

    expect(component.processEntry).toBeTruthy();

    expect(component.isFormSubmitted).toBe(false);

    expect(component.isFormProcessing).toBe(false);

    expect(component.entryCreatedOb).toBeDefined();

    expect(component.text).not.toBeTruthy();

    expect(component.isFormValid).not.toBeTruthy();

  });

  it('should confirm external component are null' , () => {

    hostElement = fixture.nativeElement;

    notificationScreenElement = fixture.debugElement.query(By.directive(NotificationScreenComponent)).nativeElement;

    viewDescriptionElement = fixture.debugElement.query(By.directive(ViewDescriptionComponent)).nativeElement;

    replyCommentDetailElement = fixture.debugElement.query(By.directive(ReplyCommentDetailComponent)).nativeElement;

    textAreaElement = hostElement.querySelector('textarea');

    submitButtonElement = hostElement.querySelector('.btn-submit');

    let labelElement : HTMLLabelElement = hostElement.querySelector('input[for="text"]');

    let formDivElement : HTMLDivElement = hostElement.querySelectorAll('div')[0];

    expect(formDivElement.getAttribute('class')).toContain('comment-form');

    expect(labelElement.innerText).toContain('Message');

    expect(notificationScreenElement).toBeNull();

    expect(viewDescriptionElement).toBeNull();

    expect(replyCommentDetailElement).toBeNull();

    expect(textAreaElement).toBeNull();

    expect(submitButtonElement).toBeNull();

  });

  it('should confirm component external services are null' , () => {

    expect(replyCreateService).toBeNull();

    expect(notificationMessageService).toBeNull();

  });

  it('should set component external services' , () => {

      replyCreateService = TestBed.inject(ReplyCreateService);

      notificationMessageService = fixture.debugElement.injector.get(NotificationMessageService);

      expect(replyCreateService).toBeTruthy();

      expect(notificationMessageService).toBeTruthy();

  });

  it('should set component properties' , () => {

    component.systemType = 'Course Registration Request';

    component.view = 'gr';

    component.entry = {'message' : 'I want to get my course registration request resolved on time'};

    component.comment = {'text' : 'This is my comment' , 'author' : 'Yusuf Musa Yusuf'};

    component.entryCreateForm = new FormGroup({'text' : new FormControl('' , [Validators.required] ) , 'comment_author_name' : new FormControl('' , [Validators.required]) });

    fixture.detectChanges();

    expect(component.systemType).toBeDefined();

    expect(component.view).toBeDefined();

    expect(component.entry).toBeDefined();

    expect(component.text).toBeDefined();

    expect(component.text).toBeTruthy();

    expect(component.comment).toBeDefined();

    expect(component.comment_author_name).toBeDefined();

    expect(component.comment_author_name.value).toBe(component.comment.author);

    expect(component.isFormValid).toBeDefined();

    expect(component.isFormValid).toBe(false);

    expect(component.notificationAvailable).toBe(false);

    expect(component.notificationMessage).toBe('');

    expect(submitButtonElement.getAttribute('class')).toContain('disabled');

    expect(submitButtonElement.disabled).toBe(true);

  });

  it('should confirm Form Group status' , () => {

    component.entry = {'message' : 'I want to get my course registration request resolved on time'};

    component.comment = {'text' : 'This is my comment' , 'author' : 'Yusuf Musa Yusuf'};

    component.entryCreateForm = new FormGroup({'text' : new FormControl('' , [Validators.required] ) , 'comment_author_name' : new FormControl('' , [Validators.required]) });

    expect(component.entryCreateForm.valid).toBe(false);

  });

  it('should find external components to be available' , () => {

    expect(viewDescriptionElement).toBeTruthy();

    expect(replyCommentDetailElement).toBeTruthy();

    expect(textAreaElement).toBeTruthy();

    expect(submitButtonElement).toBeTruthy();

  });

  it('should change input element value' , () => {

    textAreaElement.value = userEntry.text;

    textAreaElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.text.value).toContain(userEntry.text);

    expect(component.isFormValid).toBe(true);

    expect(submitButtonElement.getAttribute('class')).not.toContain('disabled');

    expect(submitButtonElement.disabled).toBe(false);

  });

  it('should confirm empty input element' , () => {

    textAreaElement.value = '';

    textAreaElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.text.value).toContain('');

    expect(component.isFormValid).toBe(false);

  });

  it('should create entry and confirm changes' , () => {

    let submittedEntry = spyOn(component.processEntry , 'emit');

    component.createEntry(userEntry);

    expect(submittedEntry).toHaveBeenCalled();

    expect(submittedEntry).toHaveBeenCalledTimes(1);

    expect(submittedEntry).toHaveBeenCalledWith(userEntry);

    expect(component.isFormSubmitted).toBe(true);

    expect(component.isFormProcessing).toBe(true);

    let expectedUserEntry : { [key : string] : string } = null;

    component.processEntry.subscribe((reply) => {

      expectedUserEntry = reply;

    });

    expect(expectedUserEntry).toBe(userEntry);

  });

  it('should confirm form submission status' , () => {

    replyCreateService.isEntryCreated.next(true);

    fixture.detectChanges();

    expect(component.isFormSubmitted).toBe(false);

    expect(component.isFormProcessing).toBe(false);

    expect(notificationScreenElement).toBeTruthy();

  });

  it('should confirm submit button event' , () => {

    let reply : any;

    textAreaElement.value = userEntry.text;

    textAreaElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(submitButtonElement.disabled).toBe(false);

    submitButtonElement.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(component.isFormSubmitted).toBe(true);

    expect(component.isFormProcessing).toBe(true);

    component.processEntry.subscribe((entry) => {

      reply = entry;

    });

    expect(reply).toBe(userEntry);

  });

  it('should confirm form submission status' , () => {

    replyCreateService.isEntryCreated.next(true);

    fixture.detectChanges();

    replyCreateService.isEntryCreated$.subscribe((created) => {

      expect(component.isFormSubmitted).toBe(false);

      expect(component.isFormProcessing).toBe(false);

      expect(notificationScreenElement).toBeTruthy();

    });

  });

  it('should confirm unsubscription' , () => {

      component.ngOnDestroy();

      fixture.detectChanges();

      expect(component.entryCreatedOb.closed).toBeTruthy();

  });

});
