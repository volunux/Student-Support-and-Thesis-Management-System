import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { AccountChangeMessageTemplateTypeHomepageComponent } from './acmtt-homepage/acmtt-homepage.component';
import { AccountChangeMessageTemplateTypeDashboardComponent } from './acmtt-dashboard/acmtt-dashboard.component';
import { AccountChangeMessageTemplateTypeEntryCreateComponent } from './acmtt-entry-create/acmtt-entry-create.component';
import { AccountChangeMessageTemplateTypeEntriesComponent } from './acmtt-entries/acmtt-entries.component';
import { AccountChangeMessageTemplateTypeEntryDetailComponent } from './acmtt-entry-detail/acmtt-entry-detail.component';
import { AccountChangeMessageTemplateTypeEntryUpdateComponent } from './acmtt-entry-update/acmtt-entry-update.component';
import { AccountChangeMessageTemplateTypeEntryDeleteComponent } from './acmtt-entry-delete/acmtt-entry-delete.component';
import { AccountChangeMessageTemplateTypeEntryDeleteAllComponent } from './acmtt-entry-delete-all/acmtt-entry-delete-all.component';

import { RouteConfigData } from './acmtt-route-data';

const routes : Routes = [

	{'path' : '' , 'component' : AccountChangeMessageTemplateTypeHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : AccountChangeMessageTemplateTypeDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : AccountChangeMessageTemplateTypeEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : AccountChangeMessageTemplateTypeEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : AccountChangeMessageTemplateTypeEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : AccountChangeMessageTemplateTypeEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : AccountChangeMessageTemplateTypeEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : AccountChangeMessageTemplateTypeEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountChangeMessageTemplateTypeRoutingModule { }
