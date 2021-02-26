import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { RequestCredentialHomepageComponent } from './request-credential-homepage/request-credential-homepage.component';
import { RequestCredentialDashboardComponent } from './request-credential-dashboard/request-credential-dashboard.component';
import { RequestCredentialEntriesComponent } from './request-credential-entries/request-credential-entries.component';
import { RequestCredentialEntryDeleteAllComponent } from './req-cred-entry-delete-all/req-cred-entry-delete-all.component';

import { RouteConfigData } from './request-credential-route-data';

const routes : Routes = [

	{'path' : '' , 'component' : RequestCredentialHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : RequestCredentialDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entries' , 'component' : RequestCredentialEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/delete/all' , 'component' : RequestCredentialEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestCredentialRoutingModule { }
