import { CommentEntryStatusComponent } from './comment-entry-status.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CommentEntryStatusComponent', () => {

  let component : CommentEntryStatusComponent = null;

  let fixture : ComponentFixture<CommentEntryStatusComponent> = null;

  let paragraphElements : HTMLParagraphElement[] = null;

  let headerElement : HTMLHeadingElement = null;

  let hostElement : DebugElement = null;

  let expectedEntryValue : {'message' : string , 'status' : string} = {'message' : 'This is a comment' , 'status' : 'Pending'};

  let expectedSystemTypeValue : string = 'Course Registration Request';

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations : [CommentEntryStatusComponent]

    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(CommentEntryStatusComponent);

    fixture.detectChanges();

  });

  it('should confirm hostElement is null' , () => {

    expect(hostElement).toBeNull();

    expect(paragraphElements).toBeNull();

    expect(headerElement).toBeNull();

  });

  it('should confirm component instances , host elements and others' , () => {

    component = fixture.componentInstance;

    expect(component).toBeTruthy();

    hostElement = fixture.debugElement;

    expect(hostElement).toBeTruthy();

    expect(expectedEntryValue).toBeTruthy();

    expect(expectedSystemTypeValue).toBeTruthy();

  });

  it('should confirm input properties are undefined' , () => {

    expect(component.entry).toBeUndefined();

    expect(component.systemType).toBeUndefined();
  
  });

  it('should confirm component entry and systemType value' , () => {

    component.entry = expectedEntryValue;

    component.systemType = expectedSystemTypeValue;

    expect(component.entry).toBeTruthy();

    expect(component.systemType).toBeTruthy();

    expect(component.entry).toBe(expectedEntryValue);

    expect(component.systemType).toBe(expectedSystemTypeValue);

  });

  it('should confirm entry and systemType values' , () => {

    fixture.detectChanges();

    paragraphElements = hostElement.nativeElement.querySelectorAll('p') as Array<HTMLParagraphElement>;

    headerElement = hostElement.nativeElement.querySelector('h2');

    expect(headerElement.textContent).toContain('Request Detail');

    expect(paragraphElements[0].textContent).toMatch(/^Message : /);

    expect(paragraphElements[0].textContent).toContain('This is a comment');

    expect(paragraphElements[1].textContent).toMatch(/Status : Pending | Pending/i);

  });

});
