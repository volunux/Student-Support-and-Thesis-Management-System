import { Injectable } from '@angular/core';
import { RouterOutlet , Router , RouterEvent , RouteConfigLoadEnd , RouteConfigLoadStart } from '@angular/router';

@Injectable({

  'providedIn': 'root'

})

export class LoadingBarService {

  constructor(private router : Router) { 

    this.isShowingRouteLoadIndicator = false;

    let asyncLoadCount = 0;

      router.events
         
          .subscribe((event: RouterEvent) : void => {

        if (event instanceof RouteConfigLoadStart) { asyncLoadCount++;  }

        else if (event instanceof RouteConfigLoadEnd) { asyncLoadCount--; }
 
        // If there is at least one pending asynchronous config load request,
        // then let's show the loading indicator.
        // --
        // CAUTION: I'm using CSS to include a small delay such that this loading
        // indicator won't be seen by people with sufficiently fast connections.
        this.isShowingRouteLoadIndicator = !!asyncLoadCount;  

      });

  }

  public isShowingRouteLoadIndicator : boolean;

  public loadLink(link) : void {

    this.router.navigate(link)

    .then((loaded) => { })

    .catch((failed) => {

      this.isShowingRouteLoadIndicator = false; });
  }

}
