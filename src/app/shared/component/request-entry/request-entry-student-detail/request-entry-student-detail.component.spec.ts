import { ComponentFixture , TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RequestEntryStudentDetailComponent } from './request-entry-student-detail.component';

describe('RequestEntryStudentDetailComponent' , () => {
  
  let component : RequestEntryStudentDetailComponent;
  
  let fixture : ComponentFixture<RequestEntryStudentDetailComponent>;

  let hostElement : DebugElement = null;

  let entryDivElement : HTMLDivElement = null;

  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
  
      declarations: [ RequestEntryStudentDetailComponent ]
  
    }).compileComponents();
  
  });

  beforeEach(() => {
  
    fixture = TestBed.createComponent(RequestEntryStudentDetailComponent);
  
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

      'author' : {

        'full_name' : 'Yusuf Yusuf Musa' ,
        'faculty' : 'Information and Communication Technology' ,
        'department' : 'Information and Media Technology' , 
        'level' : '500 level'}
         
         }

    expect(component.entry).toBeTruthy();

    fixture.detectChanges();

    let headerElement = fixture.nativeElement.querySelector('h2');

    entryDivElement = fixture.nativeElement.querySelector('div');

    expect(headerElement).toBeTruthy();

    expect(headerElement.innerText).toContain('Student Detail');

    expect(entryDivElement).toBeTruthy();

    expect(entryDivElement.innerText).toContain('Name : ');

    expect(entryDivElement.innerText).toContain('Yusuf Yusuf Musa');

    expect(entryDivElement.innerText).toContain('Faculty : ');

    expect(entryDivElement.innerText).toContain(component.entry.author.faculty);

    expect(entryDivElement.innerText).toContain('Department : ');

    expect(entryDivElement.innerText).toContain(component.entry.author.department);

    expect(entryDivElement.innerText).toContain('Level : ');

    expect(entryDivElement.innerText).toContain(component.entry.author.level);

  });

  it('should confirm entry presence' , () => {

    component.entry = null;

    expect(component.entry).toBeNull();

    fixture.detectChanges();

    expect(entryDivElement).not.toBeTruthy();

  });

});
