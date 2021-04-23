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

import { MiscRequestRoutingModule } from './mr-routing.module';
import { MiscRequestHomepageComponent } from './mr-homepage/mr-homepage.component';
import { MiscRequestDashboardComponent } from './mr-dashboard/mr-dashboard.component';
import { MiscRequestEntriesComponent } from './mr-entries/mr-entries.component';
import { MiscRequestEntryDetailComponent } from './mr-entry-detail/mr-entry-detail.component';
import { MiscRequestEntryTimelineComponent } from './mr-entry-timeline/mr-entry-timeline.component';
import { MiscRequestCreateCommentComponent } from './mr-create-comment/mr-create-comment.component';
import { MiscRequestCreateReplyComponent } from './mr-create-reply/mr-create-reply.component';
import { MiscRequestEntryDeleteAllComponent } from './mr-entry-delete-all/mr-entry-delete-all.component';
import { MiscRequestEntryOptionComponent } from './mr-entry-option/mr-entry-option.component';
import { MiscRequestEntryUpdateFieldComponent } from './mr-entry-update-field/mr-entry-update-field.component';

import { MiscRequestService } from './misc-request.service';
import { MiscRequestFormService } from './mr-form.service';


@NgModule({

  declarations: [

  MiscRequestHomepageComponent,
  MiscRequestDashboardComponent,
  MiscRequestEntriesComponent,
  MiscRequestEntryDetailComponent,
  MiscRequestEntryTimelineComponent,
  MiscRequestCreateCommentComponent,
  MiscRequestCreateReplyComponent,
  MiscRequestEntryDeleteAllComponent,
  MiscRequestEntryOptionComponent,
  MiscRequestEntryUpdateFieldComponent,

  ],

  providers : [

  MiscRequestService,
  MiscRequestFormService,
  ] ,
  
  imports: [
    CommonModule,
    MiscRequestRoutingModule,
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

export class MiscRequestModule { 

}
