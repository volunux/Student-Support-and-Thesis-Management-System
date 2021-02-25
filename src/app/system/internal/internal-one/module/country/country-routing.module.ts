import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../../../shared/guards/entry-delete-all.guard';

import { InternalOneHomepageComponent } from '../../internal-one-homepage/internal-one-homepage.component';
import { InternalOneDashboardComponent } from '../../internal-one-dashboard/internal-one-dashboard.component';
import { InternalOneEntryCreateComponent } from '../../internal-one-entry-create/internal-one-entry-create.component';
import { InternalOneEntriesComponent } from '../../internal-one-entries/internal-one-entries.component';
import { InternalOneEntryDetailComponent } from '../../internal-one-entry-detail/internal-one-entry-detail.component';
import { InternalOneEntryUpdateComponent } from '../../internal-one-entry-update/internal-one-entry-update.component';
import { InternalOneEntryDeleteComponent } from '../../internal-one-entry-delete/internal-one-entry-delete.component';
import { InternalOneEntryDeleteAllComponent } from '../../internal-one-entry-delete-all/internal-one-entry-delete-all.component';

import { RouteConfigData } from './country-route-data';

const route : Routes = [

	{'path' : '' , 'component' : InternalOneHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : InternalOneDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : InternalOneEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : InternalOneEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : InternalOneEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : InternalOneEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : InternalOneEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : InternalOneEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class CountryRoutingModule {

	constructor() {

		
	}


}