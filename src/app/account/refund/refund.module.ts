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


import { RefundRoutingModule } from './refund-routing.module';



import { RefundService } from './refund.service';
import { RefundFormService } from './refund-form.service';


import { StageOneTwoFiveComponent } from './stage-one-two-five/stage-one-two-five.component';
import { StageFourComponent } from './stage-four/stage-four.component';
import { RefundEntriesComponent } from './refund-entries/refund-entries.component';
import { RefundDashboardComponent } from './refund-dashboard/refund-dashboard.component';
import { RefundCreateCommentComponent } from './refund-create-comment/refund-create-comment.component';
import { RefundCreateReplyComponent } from './refund-create-reply/refund-create-reply.component';
import { RefundEntryTimelineComponent } from './refund-entry-timeline/refund-entry-timeline.component';
import { RefundEntryDeleteAllComponent } from './refund-entry-delete-all/refund-entry-delete-all.component';
import { RefundEntryDetailComponent } from './refund-entry-detail/refund-entry-detail.component';
import { RefundHomepageComponent } from './refund-homepage/refund-homepage.component';
import { RefundEntryUserSignatureComponent } from './refund-entry-user-signature/refund-entry-user-signature.component';
import { RefundEntryOptionComponent } from './refund-entry-option/refund-entry-option.component';

@NgModule({

  declarations: [

  	RefundEntriesComponent,
  	StageOneTwoFiveComponent,
  	StageFourComponent,
  	RefundDashboardComponent,
  	RefundCreateCommentComponent,
  	RefundCreateReplyComponent,
  	RefundEntryTimelineComponent,
  	RefundEntryDeleteAllComponent,
  	RefundEntryDetailComponent,
  	RefundHomepageComponent,
  	RefundEntryUserSignatureComponent,
  	RefundEntryOptionComponent

	],

  imports: [
    CommonModule,
    ReactiveFormsModule,
		GeneralModule,
    GeneralAllModule,
    RequestEntryModule,
    CommentModule,
    ReplyModule,
		SimplesModule,
    PipesModule,
    GeneralServicesModule,
    RefundRoutingModule
  ] ,

  providers : [

    RefundService,
    RefundFormService,
  ]

})

export class RefundModule { 

}
