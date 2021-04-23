import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { NotificationMessageService } from './notification-message.service';


@NgModule({

  declarations: [

  NotificationMessageComponent

  ],
  
  imports: [
    
    CommonModule
  ],

  exports : [

		NotificationMessageComponent
  ],

  providers : [

		NotificationMessageService
  ]

})

export class NotificationModule { 

}
