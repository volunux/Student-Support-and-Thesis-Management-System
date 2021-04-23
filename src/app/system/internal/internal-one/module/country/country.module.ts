import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-routing.module';
import { InternalOneModule } from '../../internal-one.module';

@NgModule({

  declarations: [

  ],

  imports: [
    CommonModule,
    InternalOneModule,
    CountryRoutingModule,
  ],

})

export class CountryModule { 

}
