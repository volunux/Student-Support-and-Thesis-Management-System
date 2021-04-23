import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralPaymentDashboardComponent } from './gp-dashboard.component';

const activatedRouteStub : { [key : string] : any } = {

  'snapshot' : {

      'data' : {

        'systemType' : 'General Payment' ,

        'title' : 'General Payment' ,

        'view' : 'gp'
} } };

const paymentServiceStub : { [key : string] : any } = {

  '$systemType' : 'General Payment' ,

  '$sa' : 'general-payment' ,

  'ptype' : null ,

};

const errorMessageServiceStub : { [key : string] : any } = {

  'errorMessage' : {}

};

const authenticationServiceStub : { [key : string] : any } = {

  'userRole' : 'student' 
};

describe('GeneralPaymentDashboardComponent' , () => {

  let component : GeneralPaymentDashboardComponent;

  let fixture : ComponentFixture<GeneralPaymentDashboardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ GeneralPaymentDashboardComponent ]

    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(GeneralPaymentDashboardComponent);

    component = fixture.componentInstance;

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});
