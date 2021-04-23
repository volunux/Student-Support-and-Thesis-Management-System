import { Injectable , ErrorHandler } from '@angular/core';
import { Router , Event , NavigationError } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError , Observable , Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

export class ErrorHandlerService implements ErrorHandler {

  private subscription: Subscription;

  constructor(private router : Router) { 

    this.subscription = router
          .events  
          .pipe(filter(event => event instanceof NavigationError))
          .subscribe((event) => { this.handleError(event as NavigationError); });

  }

  public handleError(event : NavigationError) : void {

    if (event.error != null && event.error.name != null && event.error.name === 'ChunkLoadError') { window.location.href = `${window.location.origin}${event.url}`; } 
  }

  ngOnDestroy() {
    
    this.subscription.unsubscribe();
  }
}
