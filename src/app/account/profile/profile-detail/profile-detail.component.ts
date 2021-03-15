import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { User } from '../user';
import { General } from '../general';
import { ProfileService } from '../profile.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-profile-detail',
  
  'templateUrl' : './profile-detail.component.html',
  
  'styleUrls' : ['./profile-detail.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class ProfileDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private ps : ProfileService ) { 

  }

  public systemType : string = 'Profile';

  public title : string = `${this.systemType} Detail`;

  public view : string = 'aug';

  public entry : User;

  public error : General;

  public isError : boolean = false;

  public isLoading : boolean = false;

  ngOnInit(): void {

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { 

            this.isLoading = true;

            return this.ps.profileDetail(); })
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

}
