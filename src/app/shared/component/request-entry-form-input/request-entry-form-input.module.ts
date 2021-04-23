import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestEntryFormInputComponent } from './request-entry-form-input/request-entry-form-input.component';
import { RequestEntryFormInputValidatorComponent } from './request-entry-form-input-validator/request-entry-form-input-validator.component';



@NgModule({
  
  declarations: [

  RequestEntryFormInputComponent,
  RequestEntryFormInputValidatorComponent

  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  exports : [

  RequestEntryFormInputComponent,
  RequestEntryFormInputValidatorComponent
  ]
})

export class RequestEntryFormInputModule { 

}
