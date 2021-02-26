import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../services/general-services.module';

import { GeneralInternalFormInputValidatorComponent } from './gi-form-input-validator/gi-form-input-validator.component';
import { GeneralInternalFormInputComponent } from './gi-form-input/gi-form-input.component';
import { GeneralInternalEntryCreateComponent } from './gi-entry-create/gi-entry-create.component';

import { GeneralInternalService } from './general-internal.service';
import { GeneralInternalEntryChangeService } from './gi-entry-change.service';
import { GeneralInternalFormService } from './gi-form.service';
import { GeneralInternalEntryDetailComponent } from './gi-entry-detail/gi-entry-detail.component';
import { GeneralInternalEntryUpdateComponent } from './gi-entry-update/gi-entry-update.component';
import { GeneralInternalEntryDeleteComponent } from './gi-entry-delete/gi-entry-delete.component';

@NgModule({

  declarations: [

  GeneralInternalFormInputValidatorComponent,
  GeneralInternalFormInputComponent,
  GeneralInternalEntryCreateComponent,
  GeneralInternalEntryDetailComponent,
  GeneralInternalEntryUpdateComponent,
  GeneralInternalEntryDeleteComponent

  ],
  
  imports: [

    CommonModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule
  ],

  providers : [

  	GeneralInternalService,
  	GeneralInternalEntryChangeService,
  	GeneralInternalFormService
  ] ,

  exports : [

	  GeneralInternalEntryCreateComponent,
    GeneralInternalEntryDetailComponent,
    GeneralInternalEntryUpdateComponent,
    GeneralInternalEntryDeleteComponent
  ]

})

export class GeneralInternalModule { 

}
