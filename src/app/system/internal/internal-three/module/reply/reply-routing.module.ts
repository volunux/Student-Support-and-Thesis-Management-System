import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../../../../shared/guards/entry-delete-all.guard';

import { InternalThreeHomepageComponent } from '../../internal-three-homepage/internal-three-homepage.component';
import { InternalThreeDashboardComponent } from '../../internal-three-dashboard/internal-three-dashboard.component';
import { InternalThreeEntriesComponent } from '../../internal-three-entries/internal-three-entries.component';
import { InternalThreeEntryDetailComponent } from '../../internal-three-entry-detail/internal-three-entry-detail.component';
import { InternalThreeEntryUpdateComponent } from '../../internal-three-entry-update/internal-three-entry-update.component';
import { InternalThreeEntryDeleteComponent } from '../../internal-three-entry-delete/internal-three-entry-delete.component';
import { InternalThreeEntryDeleteAllComponent } from '../../internal-three-entry-delete-all/internal-three-entry-delete-all.component';

import { RouteConfigData } from './reply-route-data';

const route : Routes = [

	{'path' : '' , 'component' : InternalThreeHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : InternalThreeDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entries' , 'component' : InternalThreeEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : InternalThreeEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/delete' , 'component' : InternalThreeEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : InternalThreeEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class ReplyRoutingModule {

	constructor() {

		
	}


}