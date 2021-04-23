import { ComponentFixture , TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RequestEntryDetailComponent } from './request-entry-detail.component';

describe('RequestEntryDetailComponent' , () => {
  
  let component : RequestEntryDetailComponent;
  
  let fixture : ComponentFixture<RequestEntryDetailComponent>;

  let hostElement : DebugElement = null;

  let entryDivElement : HTMLDivElement = null;

  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
  
      declarations: [ RequestEntryDetailComponent ]
  
    }).compileComponents();
  
  });

  beforeEach(() => {
  
    fixture = TestBed.createComponent(RequestEntryDetailComponent);
  
    component = fixture.componentInstance;
  
    fixture.detectChanges();
  
  });

  it('should create', () => {
  
    expect(component).toBeTruthy();
 
    expect(hostElement).toBeNull();

    expect(entryDivElement).toBeNull();

    hostElement = fixture.debugElement;

    entryDivElement = fixture.nativeElement.querySelector('div');

    expect(hostElement).toBeTruthy();

    expect(entryDivElement).not.toBeTruthy();

  });

  it('should confirm instance variables' , () => {

    expect(component.entry).toBeUndefined();

    component.entry = {

      'message' : 'This is my request' ,
      'application_number' : '2171298ashsa' ,
      'updated_on' : new Date() ,
      'unit' : 'Course Registration' ,
      'status' : 'Pending'
    }

    expect(component.entry).toBeTruthy();

    fixture.detectChanges();

    entryDivElement = fixture.nativeElement.querySelector('div');

    expect(entryDivElement).toBeTruthy();

    expect(entryDivElement.innerText).toContain('Message : ');

    expect(entryDivElement.innerText).toContain('This is my request');

    expect(entryDivElement.innerText).toContain('Application Unique Identification Number : ');

    expect(entryDivElement.innerText).toContain('2171298ashsa');

    expect(entryDivElement.innerText).toContain('Updated On : ');

    expect(entryDivElement.innerText).toContain('Unit : ');

    expect(entryDivElement.innerText).toContain('Course Registration');

    expect(entryDivElement.innerText).toContain('Status : ');

    expect(entryDivElement.innerText).toContain('Pending');

  });

  it('should confirm entry presence' , () => {

    component.entry = null;

    expect(component.entry).toBeNull();

    fixture.detectChanges();

    expect(entryDivElement).not.toBeTruthy();

  });

});
