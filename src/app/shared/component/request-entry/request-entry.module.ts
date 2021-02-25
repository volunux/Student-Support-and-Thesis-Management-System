import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SimplesModule } from '../../module/simples/simples.module';
import { NotificationModule } from '../../component/notification/notification.module';
import { GeneralModule } from '../../../general/general.module';


import { RequestEntryUpdateValidatorComponent } from './request-entry-update-validator/request-entry-update-validator.component';

import { RequestEntryDetailComponent } from './request-entry-detail/request-entry-detail.component';

import { RequestEntryStudentDetailComponent } from './request-entry-student-detail/request-entry-student-detail.component';
import { RequestEntryStatusComponent } from './request-entry-status/request-entry-status.component';

@NgModule({
  declarations: [

	  RequestEntryUpdateValidatorComponent,
	  RequestEntryStudentDetailComponent,
    RequestEntryDetailComponent,
    RequestEntryStatusComponent
  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SimplesModule,
    NotificationModule,
    GeneralModule
  ],

  exports : [

    RequestEntryDetailComponent,
    RequestEntryStudentDetailComponent,
    RequestEntryUpdateValidatorComponent,
    RequestEntryStatusComponent
  ]

})

export class RequestEntryModule { 

}

