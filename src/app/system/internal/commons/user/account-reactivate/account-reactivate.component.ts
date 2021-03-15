import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../user';
import { General } from '../general';
import { UserService } from '../user.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-account-reactivate',

  'templateUrl': './account-reactivate.component.html',

  'styleUrls' : ['./account-reactivate.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class AccountReactivateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private us : UserService , 

  						private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public link2 : boolean;

  public $link : string;

  public controlFilters : string[];

  public noEdit : boolean;

	public entry : User;

	private eslug : string;

	public isFormSubmitted : boolean = false

  public isFormProcessing : boolean = false

	public error : General;

  public isError : boolean = false

  public entryChangesT : any;

  public isLoading : boolean = false;

	ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.changes.systemType;

    this.title = data.changes.title;

    this.view = data.changes.view;

    this.viewWord = data.changes.viewWord;

    this.link = data.changes.link;

    this.link2 = data.changes.link2;

    this.$link = data.changes.$link;

    this.controlFilters = data.changes.controlFilters;

    this.noEdit = data.changes.noEdit;

		this.route.paramMap

      .pipe(

        switchMap((params : ParamMap) => {

          let $e = params.get('entry');

          this.eslug = $e;

          this.isLoading = true;

          return this.us.updateStatus($e , this.link2) })
        )

				.subscribe((result : User) => { 

					if (result == null) { 

            this.isLoading = false;

            this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

            this.isError = true; }

          else if (result != null) {

          this.isLoading = false;

					this.entry = result; } });
	}

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public updateStatus() : boolean {

    let isConfirmed = confirm('Are you sure you want to proceed with this action?');

    if (isConfirmed) {

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.us.updateStatus$(this.eslug , this.entry , this.link2)
      
      .subscribe((result : General) => {

        if (result == null) {

          this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

          this.isError = true; }

        if (result != null && result.updated == true) {

          this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`);

          this.entryChanges(result.$data); } }); }

     else { return false; }

  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['system' , 'internal' , this.link , 'entries']);  } , 5000) 
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
