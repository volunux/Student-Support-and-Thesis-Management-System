import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot , CanActivate , CanActivateChild , CanLoad , Route , RouterStateSnapshot , UrlTree , Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Observable } from 'rxjs';

@Injectable({

  'providedIn' : 'root'

})

export class AuthenticationGuard implements CanActivate , CanActivateChild , CanLoad {

	constructor(private aus : AuthenticationService , private router : Router) {


	}
  
  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  	const url : string = state.url;

    return this.verifyLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(route , state);
  }

  canLoad(route : Route) {

    const url : string = route.path;

    return this.verifyLogin(url);
  }

  public verifyLogin(url : string) : boolean | UrlTree {

      if (this.aus.isLoggedIn()) { return true; }

      else { this.aus.redirectAddress = url;

        return this.router.parseUrl('/sign-in');

      }
  }
  
}
