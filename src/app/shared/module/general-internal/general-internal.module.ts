import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../services/general-services.module';

import { GeneralInternalFormInputValidatorComponent } from './general-internal-form-input-validator/general-internal-form-input-validator.component';
import { GeneralInternalFormInputComponent } from './general-internal-form-input/general-internal-form-input.component';
import { GeneralInternalEntryCreateComponent } from './general-internal-entry-create/general-internal-entry-create.component';

import { GeneralInternalService } from './general-internal.service';
import { GeneralInternalEntryChangeService } from './general-internal-entry-change.service';
import { GeneralInternalFormService } from './general-internal-form.service';
import { GeneralInternalEntryDetailComponent } from './general-internal-entry-detail/general-internal-entry-detail.component';
import { GeneralInternalEntryUpdateComponent } from './general-internal-entry-update/general-internal-entry-update.component';
import { GeneralInternalEntryDeleteComponent } from './general-internal-entry-delete/general-internal-entry-delete.component';

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
