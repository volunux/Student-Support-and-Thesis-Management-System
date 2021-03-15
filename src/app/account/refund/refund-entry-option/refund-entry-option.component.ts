import { Component , Output , EventEmitter , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { Refund } from '../refund';
import { canUpdate } from '../roles';

import { RefundService } from '../refund.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-refund-entry-option',

  'templateUrl' : './refund-entry-option.component.html',

  'styleUrls' : ['./refund-entry-option.component.css'] ,

  'providers' : [NotificationService] ,

  'animations' : [fadeAnimation]

})

export class RefundEntryOptionComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private auth : AuthenticationService , private rs : RefundService ,

  						private ns : NotificationService) {

  }

  ngOnInit() : void {

  }

  ngOnDestroy() : void {

     clearTimeout(this.writeLetterT);

     clearTimeout(this.viewLetterT);
  }

  @Input('system-type') public systemType : string;

  @Input() public view : string;

  @Input() public title : string;

  @Input() public link : string;

  @Input() public entry : Refund;

  @Output() public onReviewEntry : EventEmitter<string> = new EventEmitter<string>();

  public isProcessingReview : boolean = false;

  public isLazyLoading : boolean = false;

  public writeLetterT : any;

  public viewLetterT : any;


  public setEntryOnReview(evt) : void {

    evt.preventDefault();

    evt.stopPropagation();

    if (this.isProcessingReview != true) {

    	this.isProcessingReview = true;

  	this.rs.confirmEntryOnReview$(this.entry.slug)

			.subscribe((result : Refund) => {

				if (result == null) { this.isProcessingReview = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`); }

				if (result != null && result.onReview == true) { this.isProcessingReview = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated and on review.`);

					this.onReviewEntry.emit(result.$data); } }); }

  }

  public writeLetter() {

    if (this.isLazyLoading == false) {

      this.isLazyLoading = true;

    this.writeLetterT = setTimeout(() => {

      this.router.navigate(['refund-letter' , 'entry' , this.entry.slug , 'write' ])

        .then((result) => { console.log(result) })

        .catch(() => { this.isLazyLoading = false; }); } , 0); }

  }

  public viewLetter() {

    if (this.isLazyLoading == false) {

      this.isLazyLoading = true;

    this.viewLetterT = setTimeout(() => {

      this.router.navigate(['refund-letter' , 'entry' , this.entry.slug , 'detail' ])

        .then((result) => { console.log(result) })

        .catch(() => { this.isLazyLoading = false; }); } , 0); }

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

  get userRole() : string {

  	return this.auth.userRole;
  }

  get canUpdateEntry() : boolean {

  	return canUpdate.indexOf(this.userRole) > -1;
  }

  get canUpdateEntry3() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.userRole) > -1; 
  }

  get isAdmin() : string {

      if (['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.userRole) > -1) return '/refund';

      return '/refund';

  }
}
