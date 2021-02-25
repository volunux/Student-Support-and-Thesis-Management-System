import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination/pagination.component';
import { FileAttachmentsTwoComponent } from './file-attachments-two/file-attachments-two.component';



@NgModule({

  declarations: [
  	PaginationComponent,
    FileAttachmentsTwoComponent,
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],

  providers : [

  ],
  
  exports : [
  	PaginationComponent,
    FileAttachmentsTwoComponent,
  ]
})
export class SimplesModule { 

}
