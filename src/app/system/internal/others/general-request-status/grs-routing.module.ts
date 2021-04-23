import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { GeneralRequestStatusHomepageComponent } from './grs-homepage/grs-homepage.component';
import { GeneralRequestStatusDashboardComponent } from './grs-dashboard/grs-dashboard.component';
import { GeneralRequestStatusEntryCreateComponent } from './grs-entry-create/grs-entry-create.component';
import { GeneralRequestStatusEntriesComponent } from './grs-entries/grs-entries.component';
import { GeneralRequestStatusEntryDetailComponent } from './grs-entry-detail/grs-entry-detail.component';
import { GeneralRequestStatusEntryUpdateComponent } from './grs-entry-update/grs-entry-update.component';
import { GeneralRequestStatusEntryDeleteComponent } from './grs-entry-delete/grs-entry-delete.component';
import { GeneralRequestStatusEntryDeleteAllComponent } from './grs-entry-delete-all/grs-entry-delete-all.component';

import { RouteConfigData } from './grs-route-data';

const routes : Routes = [

	{'path' : '' , 'component' : GeneralRequestStatusHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : GeneralRequestStatusDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : GeneralRequestStatusEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : GeneralRequestStatusEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : GeneralRequestStatusEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : GeneralRequestStatusEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : GeneralRequestStatusEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : GeneralRequestStatusEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRequestStatusRoutingModule { }
