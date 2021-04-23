import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserOtherFieldComponent } from './user-other-field/user-other-field.component';
import { UserOtherFieldValidatorComponent } from './user-other-field-validator/user-other-field-validator.component';


@NgModule({
  
  declarations: [

  UserOtherFieldComponent,
  UserOtherFieldValidatorComponent

  ],
  
  imports: [
  
    CommonModule,
    ReactiveFormsModule
  ] ,

  exports : [

  	UserOtherFieldComponent
  ]

})

export class UserOtherFieldModule { 

}
