import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../../../interfaces/general';
import { GeneralAllService } from '../general-all.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { NotificationService } from '../../../services/notification.service';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-general-all-entry-delete-all',

  'templateUrl' : './general-all-entry-delete-all.component.html',

  'styleUrls' : ['./general-all-entry-delete-all.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class GeneralAllEntryDeleteAllComponent implements OnInit {
  
	constructor(private route : ActivatedRoute , private router : Router , private gas : GeneralAllService , 

              private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  @Input('system-type') public systemType : string;

  @Input('view-word') public viewWord : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public $link : string;

  public error : General;

  public isError : boolean = false;

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public canDelete : boolean = false;

  public deleteAllT : any;

  public isLoading : boolean = false;

  ngOnInit() : void {

    this.gas.$sa = this.$link;

    this.route.paramMap.pipe(

      switchMap((params : ParamMap) => {

        this.isLoading = true;

          return this.gas.deleteAllEntry(); })
      )
        .subscribe((result : { [key : string] : any }[]) => { 

        if (result == null) {

          this.isLoading = false;

          this.canDelete = false;

          this.isError = true;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

        if (result != null && result.length > 0) {

          this.isLoading = false;

        this.canDelete = true; } });

  }

  ngOnDestroy() : void {

    clearTimeout(this.deleteAllT);
  }

  public deleteAllEntry() : any {

    let isConfirmed = confirm('Are you sure you want to proceed with this action?');

    if (!isConfirmed) return false;

    this.gas.$systemType = this.systemType;

    this.gas.$sa = this.$link;

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.gas.$deleteAllEntry()
      
      .subscribe((result : General) => { 

        if (result == null) { this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.isError = true;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);  }

         else {

           this.isLoading = true;

           this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`);

          this.$entryChanges({}); } });

  }

  public $entryChanges(data) {

    this.deleteAllT = setTimeout(() => {

      return this.router.navigate(['system' , 'internal' , this.link]);  } , 5000) 
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
