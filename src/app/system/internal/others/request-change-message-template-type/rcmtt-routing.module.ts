import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { RequestChangeMessageTemplateTypeHomepageComponent } from './rcmtt-homepage/rcmtt-homepage.component';
import { RequestChangeMessageTemplateTypeDashboardComponent } from './rcmtt-dashboard/rcmtt-dashboard.component';
import { RequestChangeMessageTemplateTypeEntryCreateComponent } from './rcmtt-entry-create/rcmtt-entry-create.component';
import { RequestChangeMessageTemplateTypeEntriesComponent } from './rcmtt-entries/rcmtt-entries.component';
import { RequestChangeMessageTemplateTypeEntryDetailComponent } from './rcmtt-entry-detail/rcmtt-entry-detail.component';
import { RequestChangeMessageTemplateTypeEntryUpdateComponent } from './rcmtt-entry-update/rcmtt-entry-update.component';
import { RequestChangeMessageTemplateTypeEntryDeleteComponent } from './rcmtt-entry-delete/rcmtt-entry-delete.component';
import { RequestChangeMessageTemplateTypeEntryDeleteAllComponent } from './rcmtt-entry-delete-all/rcmtt-entry-delete-all.component';

import { RouteConfigData } from './rcmtt-route-data';

const routes : Routes = [

	{'path' : '' , 'component' : RequestChangeMessageTemplateTypeHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : RequestChangeMessageTemplateTypeDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : RequestChangeMessageTemplateTypeEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : RequestChangeMessageTemplateTypeEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : RequestChangeMessageTemplateTypeEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : RequestChangeMessageTemplateTypeEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : RequestChangeMessageTemplateTypeEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : RequestChangeMessageTemplateTypeEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestChangeMessageTemplateTypeRoutingModule { }
