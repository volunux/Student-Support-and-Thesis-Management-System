import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetStartedComponent } from './get-started.component';
import { AuthenticationService } from '../../authentication/authentication.service';

let authenticationServiceStub = {

  'loggedIn' : true ,

  'isLoggedIn' : function() { return this.loggedIn; } ,

}

describe('GetStartedComponent', () => {

  let component : GetStartedComponent;

  let fixture : ComponentFixture<GetStartedComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations : [ GetStartedComponent ] ,

      providers : [{provide : AuthenticationService , useValue : authenticationServiceStub}]

    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(GetStartedComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

    expect(component.isLoggedIn).toBe(true);

  });

  it('should confirm other variables' , () => {

    authenticationServiceStub.loggedIn = false;

    expect(component.isLoggedIn).toBe(false);

  });

  it('should confirm other variables ii' , () => {

    authenticationServiceStub.loggedIn = true;

    fixture.detectChanges();

    let headerElement : HTMLHeadingElement = fixture.nativeElement.querySelector('h3');

    expect(headerElement.innerText).toContain('Get Started');

  });

});
