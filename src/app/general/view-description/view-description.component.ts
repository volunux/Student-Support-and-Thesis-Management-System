import { Component , OnInit , Input , ChangeDetectionStrategy } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({

  'selector' : 'app-view-description',

  'templateUrl' : './view-description.component.html',

  'styleUrls': ['./view-description.component.css'] ,

  'animations' : [fadeAnimation]

})

export class ViewDescriptionComponent implements OnInit {

  constructor() { 

  }

  @Input('system-type') public systemType : string;

  @Input('view-type') public name : string = '';

  @Input('view-description') set viewDesc(name : string) {

    this.name = name;
  }

  public entries : { [key : string] : string };

  get view() : string {

    return this.entries[this.name];
  } 

  ngOnInit() : void {

    this.entries  = {

    'aug' : `This section of the system allows you to perform administrator related actions such as adding a user , viewing and making changes to user and also analyzing the user statistics.` ,

    'ca' : `Administrators are allowed to create user profiles which can perform actions in the system or use other processess to fulfill request when necessary.` ,

    'gr' : `Users who are members of this system depending on defined role will be able to perform actions such as adding , deleting and updating a request entry.

            This section of the system allows a student to primarily send request so it can be resolved by the appropriate department.` ,

     'mr' : `Any requests other than the defined system General Requests or Refund or Account can be created by a student or guest and submitted for resolution. This type of requests are opened and

             public to users of the system irrespective of their role and will be able to contribute their knowledge towards the resolution of a request` ,

    'acr' : `Users who want to change some part of their profile which may include role , status , unit will have to request for approval. As a result of this , a user have to send a request which will be

            under review and if reason for modification is approved , changes will be made to the user account which result to changes in user profiles to be able to perform some action or task in the system.` ,

    'rf' : `All students are required to pay the school registration fees which enable them to perform various academic activities like course registration,

            checking of semester results and others. In the process of making payment, issues might arise such as 

            the case of an intermitent network that would result in double debit of a user bank account for the same service. If you are in this situation and you have (which you should) 

             documents proving that your account was debited multiple times and want to request for a refund. You can fill in and submit the form below

            to have it investigated and reviewed for resolution.` ,

    'gp' : `Student can make payment for fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 or beyond are expected to 

            make payment. Failure to make this payment will mean a student is not going to be cleared for graduation from the university. Although, students will be allowed 

            to make payment with no additional charges. You can fill in the form , make payment and print your receipt.` ,

    'uup' : `Members of the system can update their account at anytime they desire. Changes once made are permanent but can still be changed later if desired by the user.` ,

    'up' : `Members of the system can update their account at anytime they desire. Changes once made are permanent but can still be changed later if desired by the user.` ,

    'upv' : `Members of the system can update their account at anytime they desire. Changes once made are permanent but can still be changed later if desired by the user.` ,

    'cp' : `Users who are member of the system are allowed and free to change their existing password and replace it with a new one so as to protect their account from unauthorized access by.` ,

    'udp' : `Users who are member of the system are allowed and free to deactivate their profile if they so wishes and will be allowed to reactivate their profiles so that they will continue

            to be able to use the system and perform tasks.` ,

    'urp' : `Users who are member of the system are allowed and free to reactivate their profile if they so wishes and will be allowed to reactivate their profiles so that they will continue

            to be able to use the system and perform tasks.` ,

    'uadp' : `All user profiles if the button confirmed will result in total deletion from the system or database. It is advised you review your decision before pressing the confirmation button

            which will remove or delete all user profiles or account from the system.` ,

    'dup' : `User profile if the button confirmed will result in total deletion from the system or database. It is advised you review your decision before pressing the confirmation button

            which will remove or delete user profile or account from the system.` ,

    'cppas' : `Users or member of the system will be allowed and are free to substitute their existing signature and profile picture with a new one so that they can perform.` ,

    'ups' : `A list of users that are members of the system or application. Users with privileges of a Super Administrator will be able to view and edit and also remove user profiles from 

            the system. He or she can also make analysis of the users that are registered with this system to be able to make important decisions which would make efficiently and effectively

            the use of this system to the highest level.` ,

    'pr' : `A user who have forgotten his or her password can provide his or her email address and get a chance to reset the profile password to the desired choice.` ,

    'ud' : `A user who is a member of the system can view his or her dashboard to create requests and make payments. Examples of a request that a user can perform are rectification of issues

            during academic course registration , in need of internet facility credentials for the first time and wanting to make payment for departmental and faculty fee.

            All Users who are students are allowed to create a request else operation will be rejected.` ,

    'user-dashboard' : `A user who is a student or guest of the system can create an entry or perform the following tasks such as reviewing of profile , request for support on academic related activies ,

            making payments and also answering requests that may be created by a guest or someone outside the school , any role greater than a student will be able to perform some other roles.` ,

    'general-entry' : `As a member of the system, you are eligible to make request and payment for different purpose as defined by the body of the school or institution.` ,

    'upr' : `A user who is a member of the system can review his or her own profile and perform some of the following actions freely at any time of choosing.` ,

    'gen-internal' : `This section of the system allows you to perform administrator and user related actions such as adding a ${this.systemType} , viewing and making changes 

                      to ${this.systemType} and also analyzing the ${this.systemType} statistics.`  

  };
  
  }

}
