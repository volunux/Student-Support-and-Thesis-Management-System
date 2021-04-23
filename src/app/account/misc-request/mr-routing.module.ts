import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../shared/guards/entry-delete-all.guard';

import { MiscRequestHomepageComponent } from './mr-homepage/mr-homepage.component';
import { MiscRequestDashboardComponent } from './mr-dashboard/mr-dashboard.component';
import { MiscRequestEntriesComponent } from './mr-entries/mr-entries.component';
import { MiscRequestEntryDetailComponent } from './mr-entry-detail/mr-entry-detail.component';
import { MiscRequestEntryTimelineComponent } from './mr-entry-timeline/mr-entry-timeline.component';
import { MiscRequestCreateCommentComponent } from './mr-create-comment/mr-create-comment.component';
import { MiscRequestCreateReplyComponent } from './mr-create-reply/mr-create-reply.component';
import { MiscRequestEntryDeleteAllComponent } from './mr-entry-delete-all/mr-entry-delete-all.component';

import { RouteConfigData } from './mr-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : MiscRequestHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : MiscRequestDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

					{'path' : 'entries' , 'component' : MiscRequestEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

					{'path' : 'entry/create' , 'loadChildren' : () => import('./mr-entry-create/mr-entry-create.module').then(m => m.MiscRequestEntryCreateModule) } ,

					{'path' : 'entry/:entry/detail' , 'component' : MiscRequestEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

					// {'path' : 'entry/:entry/send-mail' , 'loadChildren' : () => import('./mr-send-mail/mr-send-mail.module').then(m => m.AcrSendMailModule) } ,

					{'path' : 'entry/:entry/timeline' , 'component' : MiscRequestEntryTimelineComponent , 'data' : {'timeline' : RouteConfigData.timeline } } ,

					{'path' : 'entry/:entry/comment/add' , 'component' : MiscRequestCreateCommentComponent , 'data' : {'comment' : RouteConfigData.comment } } ,

					{'path' : 'entry/:entry/comment/:comment/reply/add' , 'component' : MiscRequestCreateReplyComponent , 'data' : {'reply' : RouteConfigData.reply } }	,

					{'path' : 'entry/delete/all' , 'component' : MiscRequestEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class MiscRequestRoutingModule { 

}
