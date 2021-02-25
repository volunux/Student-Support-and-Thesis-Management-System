import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTypeRoutingModule } from './payment-type-routing.module';
import { InternalOneModule } from '../../internal-one.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    InternalOneModule,
    PaymentTypeRoutingModule,
  ],

})

export class PaymentTypeModule { 

}
