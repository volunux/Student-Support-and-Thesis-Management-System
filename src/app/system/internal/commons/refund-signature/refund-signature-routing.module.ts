import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { RefundSignatureHomepageComponent } from './refund-signature-homepage/refund-signature-homepage.component';
import { RefundSignatureDashboardComponent } from './refund-signature-dashboard/refund-signature-dashboard.component';
import { RefundSignatureEntriesComponent } from './refund-signature-entries/refund-signature-entries.component';
import { RefundSignatureEntryDeleteAllComponent } from './refund-s-entry-delete-all/refund-s-entry-delete-all.component';

import { RouteConfigData } from './refund-signature-route-data';

const routes : Routes = [

	{'path' : '' , 'component' : RefundSignatureHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : RefundSignatureDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entries' , 'component' : RefundSignatureEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/delete/all' , 'component' : RefundSignatureEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundSignatureRoutingModule { }
