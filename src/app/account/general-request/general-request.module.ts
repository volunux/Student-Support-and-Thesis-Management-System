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
import { RequestEntryMessageTemplateModule } from '../../shared/component/request-entry-message-template/request-entry-message-template.module';

import { GeneralRequestRoutingModule } from './gr-routing.module';
import { GeneralRequestHomepageComponent } from './gr-homepage/gr-homepage.component';
import { GeneralRequestDashboardComponent } from './gr-dashboard/gr-dashboard.component';
import { GeneralRequestEntryDashboardComponent } from './gr-entry-dashboard/gr-entry-dashboard.component';
import { GeneralRequestEntriesComponent } from './gr-entries/gr-entries.component';
import { GeneralRequestEntryDetailComponent } from './gr-entry-detail/gr-entry-detail.component';
import { GeneralRequestEntryTimelineComponent } from './gr-entry-timeline/gr-entry-timeline.component';
import { GeneralRequestCreateCommentComponent } from './gr-create-comment/gr-create-comment.component';
import { GeneralRequestCreateReplyComponent } from './gr-create-reply/gr-create-reply.component';
import { GeneralRequestEntryTransferComponent } from './gr-entry-transfer/gr-entry-transfer.component';
import { GeneralRequestEntryDeleteAllComponent } from './gr-entry-delete-all/gr-entry-delete-all.component';
import { GeneralRequestEntryOptionComponent } from './gr-entry-option/gr-entry-option.component';
import { GeneralRequestEntryUpdateFieldComponent } from './gr-entry-update-field/gr-entry-update-field.component';
import { GeneralRequestEntryGeneratePasswordComponent } from './gr-entry-gen-password/gr-entry-gen-password.component';
import { GeneralRequestEntryGenerateUsernamePasswordComponent } from './gr-entry-generate-u-p/gr-entry-generate-u-p.component';
import { GeneralRequestEntryCredentialValidatorComponent } from './gr-entry-cred-validator/gr-entry-cred-validator.component';
import { GeneralRequestEntryTransferValidatorComponent } from './gr-entry-transfer-validator/gr-entry-transfer-validator.component';

import { GenerateUsernamePasswordService } from './generate-username-password.service';
import { GeneralRequestService } from './general-request.service';
import { GeneralRequestFormService } from './gr-form.service';

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
  GeneralRequestEntryTransferValidatorComponent,

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
    GeneralServicesModule,
    RequestEntryMessageTemplateModule
  ]

})

export class GeneralRequestModule { 

}
