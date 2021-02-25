import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSessionRoutingModule } from './payment-session-routing.module';
import { InternalOneModule } from '../../internal-one.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    InternalOneModule,
    PaymentSessionRoutingModule,
  ],

})

export class PaymentSessionModule { 

}
