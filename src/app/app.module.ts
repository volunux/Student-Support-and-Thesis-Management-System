import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { Api_Token , Api_Config} from './configuration';
import { appInterceptors } from './general/all-interceptors';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './all/get-started/get-started.component';
import { WelcomeComponent } from './all/welcome/welcome.component';
import { PageNotFoundComponent } from './all/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './all/unauthorized/unauthorized.component';
import { NavigationBarComponent } from './all/navigation-bar/navigation-bar.component';
import { MemberDashboardComponent } from './all/member-dashboard/member-dashboard.component';
import { LoginDetailsComponent } from './all/login-details/login-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({

  declarations: [
    AppComponent,
    GetStartedComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    NavigationBarComponent,
    MemberDashboardComponent,
    LoginDetailsComponent,
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  
  providers: [ {'provide' : Api_Token , 'useValue' : Api_Config , 'multi' : false } ,

  ...appInterceptors
   
   ],
  
  bootstrap: [AppComponent]
})

export class AppModule { 

}
