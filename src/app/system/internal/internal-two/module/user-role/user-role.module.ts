import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoleRoutingModule } from './user-role-routing.module';
import { InternalTwoModule } from '../../internal-two.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    InternalTwoModule,
    UserRoleRoutingModule,
  ],
  
  providers : [

  ],

  exports : [
  ]
})
export class UserRoleModule { }
