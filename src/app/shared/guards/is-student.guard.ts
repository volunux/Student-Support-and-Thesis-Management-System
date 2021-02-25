import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot , Router , RouterStateSnapshot , UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({

  'providedIn' : 'root'

})

export class IsStudentGuard implements CanActivate {

	constructor(private aus : AuthenticationService , private router : Router) {

	}

  canActivate(

    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.verifyMemberPrivilege();
  }

  canActivateChild(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(route , state);
  }

  canLoad(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(route , state);
  }

  public verifyMemberPrivilege() : boolean | UrlTree {

    let role = this.aus.userMinorDetails.role;

    let allowedMembers = ['student' , 'departmentPresident' , 'facultyPresident'];

    if (allowedMembers.indexOf(role) < 0) { this.router.navigate(['unauthorized']);

      return false;  }

    else { return true; }

  }
  
}
