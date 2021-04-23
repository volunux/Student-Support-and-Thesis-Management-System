import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPasswordRoutingModule } from './request-password-routing.module';
import { RequestCredentialModule } from '../../request-credential.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    RequestCredentialModule,
    RequestPasswordRoutingModule,
  ],

})

export class RequestPasswordModule { 

}
