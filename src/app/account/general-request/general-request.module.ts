import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../general/general.module';
import { SimplesModule } from '../../shared/module/simples/simples.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { RequestEntryModule } from '../../shared/component/request-entry/request-entry.module';
import { CommentModule } from '../../shared/component/comment/comment.module';
import { ReplyModule } from '../../shared/component/reply/reply.module';
import { GeneralAllModule } from '../../shared/module/general-all/general-all.module';
import { GeneralServicesModule } from '../../shared/services/general-services.module';

import { GeneralRequestRoutingModule } from './general-request-routing.module';
import { GeneralRequestHomepageComponent } from './general-request-homepage/general-request-homepage.component';
import { GeneralRequestDashboardComponent } from './general-request-dashboard/general-request-dashboard.component';
import { GeneralRequestEntryDashboardComponent } from './general-request-entry-dashboard/general-request-entry-dashboard.component';
import { GeneralRequestEntriesComponent } from './general-request-entries/general-request-entries.component';
import { GeneralRequestEntryDetailComponent } from './general-request-entry-detail/general-request-entry-detail.component';
import { GeneralRequestEntryTimelineComponent } from './general-request-entry-timeline/general-request-entry-timeline.component';
import { GeneralRequestCreateCommentComponent } from './general-request-create-comment/general-request-create-comment.component';
import { GeneralRequestCreateReplyComponent } from './general-request-create-reply/general-request-create-reply.component';
import { GeneralRequestEntryTransferComponent } from './general-request-entry-transfer/general-request-entry-transfer.component';
import { GeneralRequestEntryDeleteAllComponent } from './general-request-entry-delete-all/general-request-entry-delete-all.component';
import { GeneralRequestEntryOptionComponent } from './general-request-entry-option/general-request-entry-option.component';
import { GeneralRequestEntryUpdateFieldComponent } from './general-request-entry-update-field/general-request-entry-update-field.component';
import { GeneralRequestEntryGeneratePasswordComponent } from './general-request-entry-generate-password/general-request-entry-generate-password.component';
import { GeneralRequestEntryGenerateUsernamePasswordComponent } from './general-request-entry-generate-username-password/general-request-entry-generate-username-password.component';
import { GeneralRequestEntryCredentialValidatorComponent } from './general-request-entry-credential-validator/general-request-entry-credential-validator.component';
import { GeneralRequestEntryTransferValidatorComponent } from './general-request-entry-transfer-validator/general-request-entry-transfer-validator.component';

import { GenerateUsernamePasswordService } from './generate-username-password.service';
import { GeneralRequestService } from './general-request.service';
import { GeneralRequestFormService } from './general-request-form.service';

@NgModule({

  declarations: [

  GeneralRequestHomepageComponent,
  GeneralRequestDashboardComponent,
  GeneralRequestEntryDashboardComponent,
  GeneralRequestEntriesComponent,
  GeneralRequestEntryDetailComponent,
  GeneralRequestEntryTimelineComponent,
  GeneralRequestCreateCommentComponent,
  GeneralRequestCreateReplyComponent,
  GeneralRequestEntryTransferComponent,
  GeneralRequestEntryDeleteAllComponent,
  GeneralRequestEntryOptionComponent,
  GeneralRequestEntryUpdateFieldComponent,
  GeneralRequestEntryGeneratePasswordComponent,
  GeneralRequestEntryGenerateUsernamePasswordComponent,
  GeneralRequestEntryCredentialValidatorComponent,
  GeneralRequestEntryTransferValidatorComponent

  ],

  providers : [

  GeneralRequestService,
  GeneralRequestFormService,
	GenerateUsernamePasswordService
  ] ,
  
  imports: [
    CommonModule,
    GeneralRequestRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralAllModule,
    RequestEntryModule,
    CommentModule,
    ReplyModule,
    SimplesModule,
    PipesModule,
    GeneralServicesModule
  ]

})

export class GeneralRequestModule { 

}
