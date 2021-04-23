import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MemberDashboardComponent } from './member-dashboard.component';
import { AuthenticationService } from '../../authentication/authentication.service';

let authenticationServiceStub = {

  'loggedIn' : true ,

  'isLoggedIn' : function() { return this.loggedIn; } ,

}

describe('MemberDashboardComponent' , () => {

  let component : MemberDashboardComponent;

  let fixture : ComponentFixture<MemberDashboardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ MemberDashboardComponent ] ,

      providers : [{provide : AuthenticationService , useValue : authenticationServiceStub}] ,

      schemas : [NO_ERRORS_SCHEMA]

    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(MemberDashboardComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

    expect(component.systemType).toBeDefined();

    expect(component.systemType).toEqual('Profile');

    expect(component.title).toBe('Member Dashboard');

    expect(component.view).toEqual('upr');

    expect(component.entries.length).toEqual(3);

  });

  it('should confirm other variables' , () => {

    authenticationServiceStub.loggedIn = false;

    expect(component.isLoggedIn).toBe(false);

  });

  it('should confirm other variables ii' , () => {

    authenticationServiceStub.loggedIn = true;

    fixture.detectChanges();

    let headerElement : HTMLHeadingElement = fixture.nativeElement.querySelector('h2');

    expect(headerElement.innerText).toContain('Member Dashboard');

  });

});
