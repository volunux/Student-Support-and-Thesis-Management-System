import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../services/general-services.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { GeneralMessageTemplateService } from './gmt.service';
import { GeneralMessageTemplateEntryChangeService } from './gmt-entry-change.service';
import { GeneralMessageTemplateFormService } from './gmt-form.service';

import { GeneralMessageTemplateEntryCreateComponent } from './gmt-entry-create/gmt-entry-create.component';
import { GeneralMessageTemplateEntryUpdateComponent } from './gmt-entry-update/gmt-entry-update.component';
import { GeneralMessageTemplateEntryDeleteComponent } from './gmt-entry-delete/gmt-entry-delete.component';
import { GeneralMessageTemplateFormInputComponent } from './gmt-form-input/gmt-form-input.component';
import { GeneralMessageTemplateFormInputValidatorComponent } from './gmt-form-input-validator/gmt-form-input-validator.component';
import { GeneralMessageTemplateEntryDetailComponent } from './gmt-entry-detail/gmt-entry-detail.component';



@NgModule({

  declarations: [

  	GeneralMessageTemplateEntryCreateComponent,
  	GeneralMessageTemplateEntryDeleteComponent,
  	GeneralMessageTemplateEntryUpdateComponent,
  	GeneralMessageTemplateFormInputComponent,
  	GeneralMessageTemplateFormInputValidatorComponent,
  	GeneralMessageTemplateEntryDetailComponent

  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ,
  ],

  providers : [

    GeneralMessageTemplateService,
    GeneralMessageTemplateEntryChangeService,
    GeneralMessageTemplateFormService
  ] ,

  exports : [

    GeneralMessageTemplateEntryCreateComponent,
    GeneralMessageTemplateEntryDetailComponent,
    GeneralMessageTemplateEntryUpdateComponent,
    GeneralMessageTemplateEntryDeleteComponent,
    GeneralMessageTemplateFormInputComponent,
    GeneralMessageTemplateFormInputValidatorComponent,
  ]

})

export class GeneralMessageTemplateModule { 

}
