import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { RequestCredentialHomepageComponent } from './request-credential-homepage/request-credential-homepage.component';
import { RequestCredentialDashboardComponent } from './request-credential-dashboard/request-credential-dashboard.component';
import { RequestCredentialEntriesComponent } from './request-credential-entries/request-credential-entries.component';
import { RequestCredentialEntryDeleteAllComponent } from './req-cred-entry-delete-all/req-cred-entry-delete-all.component';

import { RouteConfigData } from './request-credential-route-data';

const routes : Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestCredentialRoutingModule { }
