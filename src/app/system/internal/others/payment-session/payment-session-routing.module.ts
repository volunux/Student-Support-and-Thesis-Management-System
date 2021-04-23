import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { PaymentSessionHomepageComponent } from './payment-session-homepage/payment-session-homepage.component';
import { PaymentSessionDashboardComponent } from './payment-session-dashboard/payment-session-dashboard.component';
import { PaymentSessionEntryCreateComponent } from './payment-session-entry-create/payment-session-entry-create.component';
import { PaymentSessionEntriesComponent } from './payment-session-entries/payment-session-entries.component';
import { PaymentSessionEntryDetailComponent } from './payment-session-entry-detail/payment-session-entry-detail.component';
import { PaymentSessionEntryUpdateComponent } from './payment-session-entry-update/payment-session-entry-update.component';
import { PaymentSessionEntryDeleteComponent } from './payment-session-entry-delete/payment-session-entry-delete.component';
import { PaymentSessionEntryDeleteAllComponent } from './payment-session-entry-delete-all/payment-session-entry-delete-all.component';

import { RouteConfigData } from './payment-session-route-data';

const route : Routes = [

	{'path' : '' , 'component' : PaymentSessionHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : PaymentSessionDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : PaymentSessionEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : PaymentSessionEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : PaymentSessionEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : PaymentSessionEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : PaymentSessionEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : PaymentSessionEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class PaymentSessionRoutingModule {

	constructor() {

		
	}


}