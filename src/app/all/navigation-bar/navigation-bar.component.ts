import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { LoadingBarService } from '../../general/loading-bar.service';

@Component({

  'selector' : 'app-navigation-bar',

  'templateUrl' : './navigation-bar.component.html',

  'styleUrls' : ['./navigation-bar.component.css'] ,

})

export class NavigationBarComponent implements OnInit {

  constructor(private aus : AuthenticationService , private router : Router , private lbs : LoadingBarService) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  ngOnInit() : void {

  }

  get isLoggedIn() : boolean {

		return this.aus.isLoggedIn();  	
  }

  get isAdmin() : string {

  	return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.aus.userRole) > -1 ? '/' : '/';
  }

  get isAdminStatus() : boolean {

    return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.aus.userRole) > -1;    
  }

  public signOut(evt) : any {

      evt.preventDefault();

      evt.stopPropagation();

      this.aus.logout();

      return this.router.navigate(['/']);
  }

  public loadLink(link) : void {

    this.lbs.loadLink(link);
  }

}
