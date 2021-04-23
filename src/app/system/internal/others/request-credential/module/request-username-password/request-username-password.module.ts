import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestUsernamePasswordRoutingModule } from './request-username-password-routing.module';
import { RequestCredentialModule } from '../../request-credential.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    RequestCredentialModule,
    RequestUsernamePasswordRoutingModule,
  ],

})

export class RequestUsernamePasswordModule { 

}
