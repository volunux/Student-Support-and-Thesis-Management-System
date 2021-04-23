import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { DepartmentHomepageComponent } from './department-homepage/department-homepage.component';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
import { DepartmentEntryCreateComponent } from './department-entry-create/department-entry-create.component';
import { DepartmentEntriesComponent } from './department-entries/department-entries.component';
import { DepartmentEntryDetailComponent } from './department-entry-detail/department-entry-detail.component';
import { DepartmentEntryUpdateComponent } from './department-entry-update/department-entry-update.component';
import { DepartmentEntryDeleteComponent } from './department-entry-delete/department-entry-delete.component';
import { DepartmentEntryDeleteAllComponent } from './department-entry-delete-all/department-entry-delete-all.component';

import { RouteConfigData } from './department-route-data';

const route : Routes = [

	{'path' : '' , 'component' : DepartmentHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : DepartmentDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : DepartmentEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : DepartmentEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : DepartmentEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : DepartmentEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : DepartmentEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : DepartmentEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class DepartmentRoutingModule {

	constructor() {

		
	}


}