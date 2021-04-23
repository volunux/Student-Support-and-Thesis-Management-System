import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../shared/guards/entry-delete-all.guard';
import { IsSuperAdminGuard } from '../../shared/guards/is-super-admin.guard';

import { AccountChangeRequestHomepageComponent } from './acr-homepage/acr-homepage.component';
import { AccountChangeRequestDashboardComponent } from './acr-dashboard/acr-dashboard.component';
import { AccountChangeRequestEntriesComponent } from './acr-entries/acr-entries.component';
import { AccountChangeRequestEntryDetailComponent } from './acr-entry-detail/acr-entry-detail.component';
import { AccountChangeRequestEntryTimelineComponent } from './acr-entry-timeline/acr-entry-timeline.component';
import { AccountChangeRequestCreateCommentComponent } from './acr-create-comment/acr-create-comment.component';
import { AccountChangeRequestCreateReplyComponent } from './acr-create-reply/acr-create-reply.component';
import { AccountChangeRequestEntryDeleteAllComponent } from './acr-entry-delete-all/acr-entry-delete-all.component';

import { RouteConfigData } from './acr-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : AccountChangeRequestHomepageComponent ,

	'canActivate' : [AuthenticationGuard , IsSuperAdminGuard] ,

	'canLoad' : [AuthenticationGuard , IsSuperAdminGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard , IsSuperAdminGuard] ,

				'children' : [

					{'path' : '' , 'component' : AccountChangeRequestDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

					{'path' : 'entries' , 'component' : AccountChangeRequestEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

					{'path' : 'entry/create' , 'loadChildren' : () => import('./acr-entry-create/acr-entry-create.module').then(m => m.AccountChangeRequestEntryCreateModule) } ,

					{'path' : 'entry/:entry/detail' , 'component' : AccountChangeRequestEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

					{'path' : 'entry/:entry/update' , 'loadChildren' : () => import('./acr-update/acr-update.module').then(m => m.AcrUpdateModule) } ,

					{'path' : 'entry/:entry/send-mail' , 'loadChildren' : () => import('./acr-send-mail/acr-send-mail.module').then(m => m.AcrSendMailModule) } ,

					{'path' : 'entry/:entry/timeline' , 'component' : AccountChangeRequestEntryTimelineComponent , 'data' : {'timeline' : RouteConfigData.timeline } } ,

					{'path' : 'entry/:entry/comment/add' , 'component' : AccountChangeRequestCreateCommentComponent , 'data' : {'comment' : RouteConfigData.comment } } ,

					{'path' : 'entry/:entry/comment/:comment/reply/add' , 'component' : AccountChangeRequestCreateReplyComponent , 'data' : {'reply' : RouteConfigData.reply } }	,

					{'path' : 'entry/delete/all' , 'component' : AccountChangeRequestEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class AccountChangeRequestRoutingModule { 

}
