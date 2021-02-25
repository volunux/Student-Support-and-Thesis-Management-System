import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelRoutingModule } from './level-routing.module';
import { InternalOneModule } from '../../internal-one.module';

@NgModule({
  declarations: [


],

  imports: [
    CommonModule,
    InternalOneModule,
    LevelRoutingModule,
  ],
  
  providers : [

  ],

  exports : [
  ]
})
export class LevelModule { }
