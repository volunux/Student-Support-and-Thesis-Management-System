import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../shared/guards/entry-delete-all.guard';
import { IsStudentGuard } from '../../shared/guards/is-student.guard';

import { GeneralRequestHomepageComponent } from './general-request-homepage/general-request-homepage.component';
import { GeneralRequestDashboardComponent } from './general-request-dashboard/general-request-dashboard.component';
import { GeneralRequestEntryDashboardComponent } from './general-request-entry-dashboard/general-request-entry-dashboard.component';
import { GeneralRequestEntriesComponent } from './general-request-entries/general-request-entries.component';
import { GeneralRequestEntryDetailComponent } from './general-request-entry-detail/general-request-entry-detail.component';
import { GeneralRequestEntryTimelineComponent } from './general-request-entry-timeline/general-request-entry-timeline.component';
import { GeneralRequestCreateCommentComponent } from './general-request-create-comment/general-request-create-comment.component';
import { GeneralRequestEntryTransferComponent } from './general-request-entry-transfer/general-request-entry-transfer.component';
import { GeneralRequestCreateReplyComponent } from './general-request-create-reply/general-request-create-reply.component';
import { GeneralRequestEntryDeleteAllComponent } from './general-request-entry-delete-all/general-request-entry-delete-all.component';

import { RouteConfigData } from './general-request-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : GeneralRequestHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : GeneralRequestDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

					{'path' : 't/:request' , 'component' : GeneralRequestEntryDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

					{'path' : 't/:request/entries' , 'component' : GeneralRequestEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

					{'path' : 't/:request/entry/create' , 'loadChildren' : () => import('./general-request-entry-create/general-request-entry-create.module').then(m => m.GeneralRequestEntryCreateModule) } ,

					{'path' : 't/:request/entry/:entry/detail' , 'component' : GeneralRequestEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

					{'path' : 't/:request/entry/:entry/timeline' , 'component' : GeneralRequestEntryTimelineComponent , 'data' : {'timeline' : RouteConfigData.timeline } } ,

					{'path' : 't/:request/entry/:entry/transfer' , 'component' : GeneralRequestEntryTransferComponent , 'data' : {'transfer' : RouteConfigData.transfer } } ,

					{'path' : 't/:request/entry/:entry/comment/add' , 'component' : GeneralRequestCreateCommentComponent , 'data' : {'comment' : RouteConfigData.comment } } ,

					{'path' : 't/:request/entry/:entry/comment/:comment/reply/add' , 'component' : GeneralRequestCreateReplyComponent , 'data' : {'reply' : RouteConfigData.reply } }	,

					{'path' : 't/:request/entry/delete/all' , 'component' : GeneralRequestEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class GeneralRequestRoutingModule { 

}
