import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitRoutingModule } from './unit-routing.module';
import { InternalOneModule } from '../../internal-one.module';

@NgModule({
  declarations: [


],

  imports: [
    CommonModule,
    InternalOneModule,
    UnitRoutingModule,
  ],

  providers : [

  ],

  exports : [
  ]
})
export class UnitModule { }
