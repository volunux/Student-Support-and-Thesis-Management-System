import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RefundLetterRoutingModule } from './refund-letter-routing.module';
import { GeneralModule } from '../../general/general.module';
import { GeneralServicesModule } from '../../shared/services/general-services.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { RefundLetterEntryCreateComponent } from './refund-letter-entry-create/refund-letter-entry-create.component';
import { RefundLetterHomepageComponent } from './refund-letter-homepage/refund-letter-homepage.component';


import { RefundLetterFormService } from './refund-letter-form.service';
import { RefundLetterService } from './refund-letter.service';
import { RefundLetterEntryDetailComponent } from './refund-letter-entry-detail/refund-letter-entry-detail.component';
import { RefundLetterValidatorComponent } from './refund-letter-validator/refund-letter-validator.component';

@NgModule({
  declarations: [

  RefundLetterEntryCreateComponent ,
  RefundLetterHomepageComponent,
  RefundLetterEntryDetailComponent,
  RefundLetterValidatorComponent,

  ],
  
  imports: [
    CommonModule,
		RefundLetterRoutingModule,
		ReactiveFormsModule,
		GeneralModule,
		GeneralServicesModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ,
  ] ,

  providers : [

  	RefundLetterService,
  	RefundLetterFormService
  ]

})

export class RefundLetterModule { 

}
