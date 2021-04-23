import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../../shared/guards/authentication.guard';
import { NotStudentGuard } from '../../../../shared/guards/not-student.guard';
import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { RequestChangeMessageTemplateHomepageComponent } from './rcmt-homepage/rcmt-homepage.component';
import { RequestChangeMessageTemplateDashboardComponent } from './rcmt-dashboard/rcmt-dashboard.component';
import { RequestChangeMessageTemplateEntryCreateComponent } from './rcmt-entry-create/rcmt-entry-create.component';
import { RequestChangeMessageTemplateEntriesComponent } from './rcmt-entries/rcmt-entries.component';
import { RequestChangeMessageTemplateEntryDetailComponent } from './rcmt-entry-detail/rcmt-entry-detail.component';
import { RequestChangeMessageTemplateEntryUpdateComponent } from './rcmt-entry-update/rcmt-entry-update.component';
import { RequestChangeMessageTemplateEntryDeleteComponent } from './rcmt-entry-delete/rcmt-entry-delete.component';
import { RequestChangeMessageTemplateEntryDeleteAllComponent } from './rcmt-entry-delete-all/rcmt-entry-delete-all.component';

import { RouteConfigData } from './rcmt-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : RequestChangeMessageTemplateHomepageComponent ,

	'canActivate' : [AuthenticationGuard , NotStudentGuard] ,

	'canLoad' : [AuthenticationGuard , NotStudentGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard , NotStudentGuard] ,

			'children' : [

				{'path' : '' , 'component' : RequestChangeMessageTemplateDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : RequestChangeMessageTemplateEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : RequestChangeMessageTemplateEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : RequestChangeMessageTemplateEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : RequestChangeMessageTemplateEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : RequestChangeMessageTemplateEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : RequestChangeMessageTemplateEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

				]}
		]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestChangeMessageTemplateRoutingModule { }
