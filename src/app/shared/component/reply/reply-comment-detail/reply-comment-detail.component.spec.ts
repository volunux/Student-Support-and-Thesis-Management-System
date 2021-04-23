import { ComponentFixture , TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ReplyCommentDetailComponent } from './reply-comment-detail.component';

describe('ReplyCommentDetailComponent' , () => {

  let component : ReplyCommentDetailComponent = null;

  let fixture : ComponentFixture<ReplyCommentDetailComponent> = null;

  let hostElement : DebugElement = null;

  let authorParagraphElement : HTMLParagraphElement = null;

  let textParagraphElement : HTMLParagraphElement = null;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ ReplyCommentDetailComponent ]

    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(ReplyCommentDetailComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should confirm variables and properties nullity' , () => {

    expect(hostElement).toBeNull();

    hostElement = fixture.debugElement;

    expect(hostElement).toBeTruthy();

    expect(authorParagraphElement).toBeNull();

    expect(textParagraphElement).toBeNull();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

    expect(component.systemType).toBeUndefined();

    expect(component.comment).toBeUndefined();

    component.systemType = 'Course Registration Request';

    component.comment = {'author' : 'Yusuf Yusuf Musa' , 'text' : 'This is my comment'};

    expect(component.systemType).toBeTruthy();

    expect(component.comment).toBeTruthy();

    fixture.detectChanges();

  });

  it('confirm element texts contents' , () => {

    let paragraphElements : HTMLParagraphElement[] = hostElement.nativeElement.querySelectorAll('p');

    authorParagraphElement = paragraphElements[0];

    expect(authorParagraphElement.innerText).toContain('Author Name :');

    expect(authorParagraphElement.innerText).toContain('Yusuf Musa Yusuf');

    expect(authorParagraphElement.innerText).toContain('Author Name : Yusuf Yusuf Musa');

    textParagraphElement = paragraphElements[1];

    expect(authorParagraphElement.innerText).toContain('Text :');

    expect(authorParagraphElement.innerText).toContain('This is my comment');

    expect(authorParagraphElement.innerText).toContain('Text : This is my comment');


  });

});
