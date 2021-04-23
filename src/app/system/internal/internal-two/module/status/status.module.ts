import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusRoutingModule } from './status-routing.module';
import { InternalTwoModule } from '../../internal-two.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    InternalTwoModule,
    StatusRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]
})
export class StatusModule { }
