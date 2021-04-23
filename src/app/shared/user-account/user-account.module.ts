import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralDirectivesModule } from '../directives/general-directives/general-directives.module';
import { UserOtherFieldModule } from '../component/user-other-field/user-other-field.module';

import { UserAccountValidatorComponent } from './user-account-validator/user-account-validator.component';
import { UserAccountFormInputsComponent } from './user-account-form-inputs/user-account-form-inputs.component';

import { UserAccountFormService } from './user-account-form.service';

@NgModule({

  declarations: [

    UserAccountValidatorComponent,
    UserAccountFormInputsComponent
  ],
  
  imports: [
    CommonModule,
    GeneralDirectivesModule,
    ReactiveFormsModule,
    UserOtherFieldModule
  ],

  providers : [
    UserAccountFormService
  ],
  
  exports : [

    UserAccountValidatorComponent,
    UserAccountFormInputsComponent
  ]
})

export class UserAccountModule { 

}
