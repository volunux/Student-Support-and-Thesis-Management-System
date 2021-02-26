import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../shared/guards/entry-delete-all.guard';
import { IsStudentGuard } from '../../shared/guards/is-student.guard';

import { GeneralRequestHomepageComponent } from './gr-homepage/gr-homepage.component';
import { GeneralRequestDashboardComponent } from './gr-dashboard/gr-dashboard.component';
import { GeneralRequestEntryDashboardComponent } from './gr-entry-dashboard/gr-entry-dashboard.component';
import { GeneralRequestEntriesComponent } from './gr-entries/gr-entries.component';
import { GeneralRequestEntryDetailComponent } from './gr-entry-detail/gr-entry-detail.component';
import { GeneralRequestEntryTimelineComponent } from './gr-entry-timeline/gr-entry-timeline.component';
import { GeneralRequestCreateCommentComponent } from './gr-create-comment/gr-create-comment.component';
import { GeneralRequestEntryTransferComponent } from './gr-entry-transfer/gr-entry-transfer.component';
import { GeneralRequestCreateReplyComponent } from './gr-create-reply/gr-create-reply.component';
import { GeneralRequestEntryDeleteAllComponent } from './gr-entry-delete-all/gr-entry-delete-all.component';

import { RouteConfigData } from './gr-route-data';

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

					{'path' : 't/:request/entry/create' , 'loadChildren' : () => import('./gr-entry-create/gr-entry-create.module').then(m => m.GeneralRequestEntryCreateModule) } ,

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
