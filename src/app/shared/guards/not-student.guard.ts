import { Injectable } from '@angular/core';
import { CanActivate , CanActivateChild , CanLoad , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({

  'providedIn' : 'root'

})

export class NotStudentGuard implements CanActivate {
	
	constructor(private aus : AuthenticationService , private router : Router) {


	}

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.verifyMemberPrivilege();
  }

  public verifyMemberPrivilege() : boolean | UrlTree {

  	let role = this.aus.userMinorDetails.role;

  	let notAllowedMembers = ['student' , 'departmentPresident' , 'facultyPresident'];

  	if (notAllowedMembers.indexOf(role) > -1) { this.router.navigate(['unauthorized']);

  		return false;	}

  	else { return true; }

  }

  canActivateChild(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(route , state);
  }

  canLoad() : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.verifyMemberPrivilege();

  }
  
}
