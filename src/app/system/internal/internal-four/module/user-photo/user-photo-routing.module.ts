import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EntryDeleteAllGuard } from '../../../../../shared/guards/entry-delete-all.guard';

import { InternalFourHomepageComponent } from '../../internal-four-homepage/internal-four-homepage.component';
import { InternalFourDashboardComponent } from '../../internal-four-dashboard/internal-four-dashboard.component';
import { InternalFourEntriesComponent } from '../../internal-four-entries/internal-four-entries.component';
import { InternalFourEntryDeleteAllComponent } from '../../internal-four-entry-delete-all/internal-four-entry-delete-all.component';

import { RouteConfigData } from './user-photo-route-data';

const routes : Routes = [

	{'path' : '' , 'component' : InternalFourHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : InternalFourDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entries' , 'component' : InternalFourEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/delete/all' , 'component' : InternalFourEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPhotoRoutingModule { }
