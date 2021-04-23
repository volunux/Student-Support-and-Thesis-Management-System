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

import { AccountChangeRequestRoutingModule } from './acr-routing.module';
import { AccountChangeRequestHomepageComponent } from './acr-homepage/acr-homepage.component';
import { AccountChangeRequestDashboardComponent } from './acr-dashboard/acr-dashboard.component';
import { AccountChangeRequestEntriesComponent } from './acr-entries/acr-entries.component';
import { AccountChangeRequestEntryDetailComponent } from './acr-entry-detail/acr-entry-detail.component';
import { AccountChangeRequestEntryTimelineComponent } from './acr-entry-timeline/acr-entry-timeline.component';
import { AccountChangeRequestCreateCommentComponent } from './acr-create-comment/acr-create-comment.component';
import { AccountChangeRequestCreateReplyComponent } from './acr-create-reply/acr-create-reply.component';
import { AccountChangeRequestEntryDeleteAllComponent } from './acr-entry-delete-all/acr-entry-delete-all.component';
import { AccountChangeRequestEntryOptionComponent } from './acr-entry-option/acr-entry-option.component';
import { AccountChangeRequestEntryUpdateFieldComponent } from './acr-entry-update-field/acr-entry-update-field.component';

import { AccountChangeRequestService } from './account-change-request.service';
import { AccountChangeRequestFormService } from './acr-form.service';


@NgModule({

  declarations: [

  AccountChangeRequestHomepageComponent,
  AccountChangeRequestDashboardComponent,
  AccountChangeRequestEntriesComponent,
  AccountChangeRequestEntryDetailComponent,
  AccountChangeRequestEntryTimelineComponent,
  AccountChangeRequestCreateCommentComponent,
  AccountChangeRequestCreateReplyComponent,
  AccountChangeRequestEntryDeleteAllComponent,
  AccountChangeRequestEntryOptionComponent,
  AccountChangeRequestEntryUpdateFieldComponent,

  ],

  providers : [

  AccountChangeRequestService,
  AccountChangeRequestFormService,
  ] ,
  
  imports: [
    CommonModule,
    AccountChangeRequestRoutingModule,
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

export class AccountChangeRequestModule { 

}
