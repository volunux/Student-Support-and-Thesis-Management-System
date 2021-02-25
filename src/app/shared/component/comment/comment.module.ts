import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';

import { EntryCommentCreateComponent } from './entry-comment-create/entry-comment-create.component';
import { CommentEntryStatusComponent } from './comment-entry-status/comment-entry-status.component';
import { EntryCommentValidatorComponent } from './entry-comment-validator/entry-comment-validator.component';

import { CommentCreateService } from './comment-create.service';
import { CommentCreateFormService } from './comment-create-form.service';


@NgModule({
  declarations: [

  EntryCommentCreateComponent,
  CommentEntryStatusComponent,
  EntryCommentValidatorComponent

  ],
  
  imports: [
  
    CommonModule,
    ReactiveFormsModule,
    GeneralModule
  ],

  providers : [

  	CommentCreateService,
  	CommentCreateFormService
  ],

  exports : [

	  EntryCommentCreateComponent,
	  CommentEntryStatusComponent,
	  EntryCommentValidatorComponent
  ]

})

export class CommentModule { 

}
