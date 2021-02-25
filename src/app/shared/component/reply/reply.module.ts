import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';

import { EntryReplyCreateComponent } from './entry-reply-create/entry-reply-create.component';
import { ReplyCommentDetailComponent } from './reply-comment-detail/reply-comment-detail.component';
import { ReplyValidatorComponent } from './reply-validator/reply-validator.component';

import { ReplyCreateFormService } from './reply-create-form.service';
import { ReplyCreateService } from './reply-create.service';

@NgModule({
  declarations: [

  EntryReplyCreateComponent,
  ReplyCommentDetailComponent,
  ReplyValidatorComponent

 ],
 
  imports: [
 
    CommonModule,
    ReactiveFormsModule,
    GeneralModule
  ],

  providers : [

  	ReplyCreateFormService,
  	ReplyCreateService
  ],

  exports : [

	  EntryReplyCreateComponent,
  ]

})

export class ReplyModule { 

}
