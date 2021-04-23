import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LowercaseDirective } from './lowercase.directive';
import { CapitalizeDirective } from './capitalize.directive';
import { FroalaInitializerDirective } from './froala-initializer.directive';

@NgModule({
  declarations: [

  	LowercaseDirective,
  	CapitalizeDirective,
    FroalaInitializerDirective
  ],


  imports: [
    
    CommonModule
  ],

  exports : [

  	LowercaseDirective,
  	CapitalizeDirective,
    FroalaInitializerDirective
  ]

})

export class GeneralDirectivesModule { 

}
