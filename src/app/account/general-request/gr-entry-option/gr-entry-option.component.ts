import { Component , Output , EventEmitter , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { GeneralRequest } from '../general-request';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { GeneralRequestService } from '../general-request.service';
import { canUpdate } from '../roles';

@Component({

  'selector' : 'app-gr-entry-option',

  'templateUrl' : './gr-entry-option.component.html',

  'styleUrls' : ['./gr-entry-option.component.css'] ,

  'providers' : [NotificationService]

})

export class GeneralRequestEntryOptionComponent implements OnInit {

  constructor(private route : ActivatedRoute , private aus : AuthenticationService , private grs : GeneralRequestService , private ns : NotificationService) { 

  }

  ngOnInit() : void {

    this.route.paramMap

     .subscribe((params : ParamMap) => {

       let $r = params.get('request');

       this.rslug = $r; });
  }

  public rslug : string;

  public isProcessingReview : boolean;

  @Input('system-type') public systemType : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public entry : GeneralRequest;


  @Output() public onReviewEntry : EventEmitter<string> = new EventEmitter<string>();


  public setEntryOnReview(evt) : void {

    evt.preventDefault();

    evt.stopPropagation();

    if (this.isProcessingReview != true) {

    	this.isProcessingReview = true;

  	this.grs.confirmEntryOnReview$(this.rslug , this.entry.slug)

			.subscribe((result : GeneralRequest) => {

				if (result == null) { this.isProcessingReview = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`); }

				if (result != null && result.onReview == true) { this.isProcessingReview = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated and on review.`);

					this.onReviewEntry.emit(result.$data); } }); }
  }

  get canUpdateEntry() : boolean {

    return canUpdate.indexOf(this.userRole) > -1;
  }

  get userRole() : string {

  	return this.aus.userRole;
  } 

  get isAdmin() : string {

      if (['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.userRole) > -1) return '/general-request';

      return '/general-request';
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  public removeNotification() : void {

     this.ns.removeNotification();
  }


}
