import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentStatusRoutingModule } from './payment-status-routing.module';
import { InternalTwoModule } from '../../internal-two.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    InternalTwoModule,
    PaymentStatusRoutingModule,
  ],

})

export class PaymentStatusModule { 

}
