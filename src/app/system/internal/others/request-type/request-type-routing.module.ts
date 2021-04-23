import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { RequestTypeHomepageComponent } from './request-type-homepage/request-type-homepage.component';
import { RequestTypeDashboardComponent } from './request-type-dashboard/request-type-dashboard.component';
import { RequestTypeEntryCreateComponent } from './request-type-entry-create/request-type-entry-create.component';
import { RequestTypeEntriesComponent } from './request-type-entries/request-type-entries.component';
import { RequestTypeEntryDetailComponent } from './request-type-entry-detail/request-type-entry-detail.component';
import { RequestTypeEntryUpdateComponent } from './request-type-entry-update/request-type-entry-update.component';
import { RequestTypeEntryDeleteComponent } from './request-type-entry-delete/request-type-entry-delete.component';
import { RequestTypeEntryDeleteAllComponent } from './request-type-entry-delete-all/request-type-entry-delete-all.component';

import { RouteConfigData } from './request-type-route-data';

const routes : Routes = [

	{'path' : '' , 'component' : RequestTypeHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : RequestTypeDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : RequestTypeEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : RequestTypeEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : RequestTypeEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : RequestTypeEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : RequestTypeEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : RequestTypeEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestTypeRoutingModule { }
