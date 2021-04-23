import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { MiscRequest } from '../misc-request';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { canUpdate } from '../roles';
import { fadeAnimation } from '../../../animations';
import { LoadingBarService } from '../../../general/loading-bar.service';

@Component({

  'selector' : 'app-mr-entry-option',

  'templateUrl' : './mr-entry-option.component.html',

  'styleUrls' : ['./mr-entry-option.component.css'] ,

  'animations' : [fadeAnimation]

})

export class MiscRequestEntryOptionComponent implements OnInit {

  constructor(private route : ActivatedRoute , private aus : AuthenticationService , private router : Router , private lbs : LoadingBarService) { 

  }

  ngOnInit() : void {

  }

  @Input('system-type') public systemType : string;

  @Input() public view : string;

  @Input() public link : string;

  @Input() public entry : MiscRequest;

  get canUpdateEntry() : boolean {

    return canUpdate.indexOf(this.userRole) > -1;
  }

  get userRole() : string {

  	return this.aus.userRole;
  } 

  get isAdmin() : string {

      if (['superAdministrator'].indexOf(this.userRole) > -1) return '/misc-request';

      return '/misc-request';
  }

  public loadLink(link) : void {

    this.lbs.loadLink(link);
  }


}
