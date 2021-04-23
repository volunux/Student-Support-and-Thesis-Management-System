import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent' , () => {

  let component : WelcomeComponent;

  let fixture : ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ WelcomeComponent ] ,

      schemas : [NO_ERRORS_SCHEMA]

    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(WelcomeComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

    expect(component.title).toEqual('Request and Service Initialization System');

  });

  it('should confirm variables' , () => {

    let headerElement : HTMLHeadingElement = fixture.nativeElement.querySelector('h2');

    let unorderedListElement : HTMLUListElement[] = fixture.nativeElement.querySelectorAll('li').

    expect(headerElement.innerText).toContain('Request and Service Initialization System');

    expect(unorderedListElement.length).toEqual(7);

  });

});
