import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../../../../shared/guards/entry-delete-all.guard';

import { InternalTwoHomepageComponent } from '../../internal-two-homepage/internal-two-homepage.component';
import { InternalTwoDashboardComponent } from '../../internal-two-dashboard/internal-two-dashboard.component';
import { InternalTwoEntryCreateComponent } from '../../internal-two-entry-create/internal-two-entry-create.component';
import { InternalTwoEntriesComponent } from '../../internal-two-entries/internal-two-entries.component';
import { InternalTwoEntryDetailComponent } from '../../internal-two-entry-detail/internal-two-entry-detail.component';
import { InternalTwoEntryUpdateComponent } from '../../internal-two-entry-update/internal-two-entry-update.component';
import { InternalTwoEntryDeleteComponent } from '../../internal-two-entry-delete/internal-two-entry-delete.component';
import { InternalTwoEntryDeleteAllComponent } from '../../internal-two-entry-delete-all/internal-two-entry-delete-all.component';

import { RouteConfigData } from './user-role-route-data';

const route : Routes = [

	{'path' : '' , 'component' : InternalTwoHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : InternalTwoDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : InternalTwoEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : InternalTwoEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : InternalTwoEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : InternalTwoEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : InternalTwoEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : InternalTwoEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class UserRoleRoutingModule {

	constructor() {

		
	}


}