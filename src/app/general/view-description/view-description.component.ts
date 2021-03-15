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

    'gr' : `Users who are members of this system will be able to perform limited and to some extent administrative actions such as adding a request , deleting and update a request entry.

            This section of the system will allows students primarilty to send request so that they can get it resolved by the appropriate department.` ,

    'rf' : `All regular and part-time students are required to pay the school registration fees or dues which enables them to perform various activities like course registration,

            checking of semester results, clearance, and other student school academic related activities. In the process of making payment, issues might arise such as 

            the case of an intermitent network that would result in double or more debit of a user bank account for the same service. If you are in this situation and you have (which you should) 

            necessary documents and evidences proving that your bank account was debited double or multiple times and want to request for a refund. You can fill in and submit the form below

            to have it investigated and reviewed by the appropriate department for resolution.` ,

    'dp' : `Student can make payment for departmental fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 are expected to 

            make payment for dues which comes with academic and social benefits. While this may not entice some student given what they might perceive as unsatisfaction. 

            A condition is enforced by the school board that failure to make this payment will mean a student is unable to graduate from the university. Although, students will be allowed 

            to make payment with no additional charges in comparison to the current normal charges. You can fill in the form and make payment and print your receipt after successful payment.` ,

    'gp' : `Student can make payment for departmental fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 are expected to 

            make payment for dues which comes with academic and social benefits. While this may not entice some student given what they might perceive as unsatisfaction. 

            A condition is enforced by the school board that failure to make this payment will mean a student is unable to graduate from the university. Although, students will be allowed 

            to make payment with no additional charges in comparison to the current normal charges. You can fill in the form and make payment and print your receipt after successful payment.` ,

    'fp' : `Student can make payment for faculty dues and fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 are expected to 

            make payment for dues which comes with academic and social benefits each academic session regularly. While this may not entice some student given what they might perceive as

            unsatisfaction. A condition is enforced by the school board that failure to make this payment will mean a student is unable to graduate from the university. Although, students

            will be allowed to make payment with no additional charges in comparison to the current normal charges. You can fill in the form and make payment and print your receipt after

            successful payment.` ,

    'uup' : `Users of the application or that are members of this system can update their account at anytime so they desire.

            Changes once made are permanent for the moment and can still be changed later if desired by the user.` ,

    'up' : `Users of the application or that are members of this system can update their account at anytime so they desire. Changes once made are permanent for the moment and can still be 

            changed later if desired by the user.` ,

    'upv' : `Users of the application or that are members of this system can update their account at anytime so they desire. Changes once made are permanent for the moment and can still be 

            changed later if desired by the user.` ,

    'cp' : `Users who are member of the system are allowed and free to change their existing password and replace it with a new one so as to protect their account from unauthorized access by 

            other users or an anonymous and then to protect from any kind of security breach.` ,

    'udp' : `Users who are member of the system are allowed and free to deactivate their profile if they so wishes and will be allowed to reactivate their profiles so that they will continue

            to be able to use the system and perform actions offered by the system.` ,

    'urp' : `Users who are member of the system are allowed and free to reactivate their profile if they so wishesand will be allowed continue to be able to use the system and perform actions

            offered by the system.` ,

    'uadp' : `All user profiles if the button confirmed will result in total deletion from the system or database. It is advised you review your decision before pressing the confirmation button

            which will remove or delete all user profiles or account from the system.` ,

    'dup' : `User profile if the button confirmed will result in total deletion from the system or database. It is advised you review your decision before pressing the confirmation button

            which will remove or delete user profile or account from the system.` ,

    'cppas' : `Users or member of the system will be allowed and are free to change their existing signature and profile picture and replace it with a new one so that they can perform

            other access efficiently and effectively.` ,

    'ups' : `A list of users that are members of the system or application. Users with priveleges of a Super Administrator will be able to view and edit and also remove user profiles from 

            the system. He or she can also make analysis of the users that are registered with this system to be able to make important decisions which would make efficiently and effectively

            the use of this system to the highest level.` ,

    'pr' : `A user who have forgotten his or her password can provide his or her email address and get a chance to reset the profile password to the desired choice.` ,

    'ud' : `A user who is a member of the system can view his or her dashboard to create requests and make payments. Examples of a request that a user can perform are rectification of issues

            during academic course registration , in need of internet facility credentials for the first time and wanting to make payment for departmental and faculty fee.

            All Users who are students are allowed to create a request else operation will be rejected.` ,

    'general-entry' : `As a member of the system, you are eligible to make request and payment for different purpose as defined by the body of the school or institution.` ,

    'upr' : `A user who is a member of the system can review his or her own profile and perform some of the following actions freely at any time of choosing.` ,

    'gen-internal' : `This section of the system allows you to perform administrator and user related actions such as adding a ${this.systemType} , viewing and making changes 

                      to ${this.systemType} and also analyzing the ${this.systemType} statistics.`  

  };
  
  }

}
