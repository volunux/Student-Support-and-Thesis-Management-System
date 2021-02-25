import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { IsStudentGuard } from '../../shared/guards/is-student.guard';
import { EntryDeleteAllGuard } from '../../shared/guards/entry-delete-all.guard';

import { RefundHomepageComponent } from './refund-homepage/refund-homepage.component';
import { RefundDashboardComponent } from './refund-dashboard/refund-dashboard.component';
import { RefundCreateCommentComponent } from './refund-create-comment/refund-create-comment.component';
import { RefundEntryDetailComponent } from './refund-entry-detail/refund-entry-detail.component';
import { RefundEntryTimelineComponent } from './refund-entry-timeline/refund-entry-timeline.component';
import { RefundEntriesComponent } from './refund-entries/refund-entries.component';
import { RefundCreateReplyComponent } from './refund-create-reply/refund-create-reply.component';
import { RefundEntryDeleteAllComponent } from './refund-entry-delete-all/refund-entry-delete-all.component';


import { RouteConfigData } from './refund-route-data';

const routes : Routes = [

	{'path' : '' ,

		'component' : RefundHomepageComponent , 

		'canActivate' : [AuthenticationGuard] ,

		'canActivateChild' : [AuthenticationGuard] ,

		'canLoad' : [AuthenticationGuard] ,

		'children' : [

				{'path' : '' , 'component' : RefundDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'loadChildren' : () => import('./refund-entry-create/refund-entry-create.module').then(m => m.RefundEntryCreateModule) } ,

				{'path' : 'entry/:entry/detail' , 'component' : RefundEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/comment/add' , 'component' : RefundCreateCommentComponent , 'data' : {'comment' : RouteConfigData.comment } } ,

				{'path' : 'entry/:entry/timeline' , 'component' : RefundEntryTimelineComponent , 'data' : {'timeline' : RouteConfigData.timeline } } ,

				{'path' : 'entry/:entry/comment/:comment/reply/add' , 'component' : RefundCreateReplyComponent , 'data' : {'reply' : RouteConfigData.reply } } ,

				{'path' : 'entries' , 'component' : RefundEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/delete/all' , 'component' : RefundEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } 
	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class RefundRoutingModule { 

}
