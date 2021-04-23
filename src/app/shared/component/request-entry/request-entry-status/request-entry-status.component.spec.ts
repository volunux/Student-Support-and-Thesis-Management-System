import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RequestEntryStatusComponent } from './request-entry-status.component';

describe('RequestEntryStatusComponent' , () => {

  let component : RequestEntryStatusComponent;

  let fixture : ComponentFixture<RequestEntryStatusComponent>;

  let hostElement : DebugElement = null;

  let entryDivElement : HTMLDivElement = null;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ RequestEntryStatusComponent ]

    }).compileComponents();
  
  });

  beforeEach(() => {
  
    fixture = TestBed.createComponent(RequestEntryStatusComponent);
  
    component = fixture.componentInstance;
  
    fixture.detectChanges();
  
  });

  it('should create', () => {
  
    expect(component).toBeTruthy();

    expect(hostElement).toBeNull();

    expect(entryDivElement).toBeNull();

    hostElement = fixture.debugElement;

    expect(hostElement).toBeTruthy();
  
  });

  it('should confirm instance variables' , () => {

    expect(component.entry).toBeUndefined();

    expect(component.systemType).toBeUndefined();

  });

  it('should set instance variables' , () => {

    component.entry = {'message' : 'This is my request' , 'status' : 'Pending'};

    component.systemType = 'Course Registration Request';

    expect(component.entry).toBeTruthy();

    expect(component.systemType).toBeTruthy();

  });

  it('should confirm elements content' , () => {

    fixture.detectChanges();

    entryDivElement = fixture.nativeElement.querySelectorAll('div')[0];

    expect(entryDivElement).toBeTruthy();

    let paragraphElements : HTMLParagraphElement[] = fixture.nativeElement.querySelectorAll('p');

    expect(paragraphElements[0]).toContain('Message : ');

    expect(paragraphElements[0]).toContain('Message : This is my request');

    expect(paragraphElements[1]).toContain('Request Status : ');

    expect(paragraphElements[1]).toContain('Request Status : Pending');

    component.entry = null;

    fixture.detectChanges();

    expect(entryDivElement).not.toBeTruthy();

  });

});
