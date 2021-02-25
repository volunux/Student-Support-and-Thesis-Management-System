import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';

import { UserUploadHomepageComponent } from './user-upload-homepage/user-upload-homepage.component';
import { UserUploadDashboardComponent } from './user-upload-dashboard/user-upload-dashboard.component';
import { UserUploadEntriesComponent } from './user-upload-entries/user-upload-entries.component';
import { UserUploadEntryDeleteAllComponent } from './user-upload-entry-delete-all/user-upload-entry-delete-all.component';

import { RouteConfigData } from './user-upload-route-data';

const routes : Routes = [

	{'path' : '' , 'component' : UserUploadHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : UserUploadDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entries' , 'component' : UserUploadEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/delete/all' , 'component' : UserUploadEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserUploadRoutingModule { }
