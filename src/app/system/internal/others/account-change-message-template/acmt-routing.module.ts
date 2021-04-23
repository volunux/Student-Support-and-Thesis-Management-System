import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { AccountChangeMessageTemplateHomepageComponent } from './acmt-homepage/acmt-homepage.component';
import { AccountChangeMessageTemplateDashboardComponent } from './acmt-dashboard/acmt-dashboard.component';
import { AccountChangeMessageTemplateEntryCreateComponent } from './acmt-entry-create/acmt-entry-create.component';
import { AccountChangeMessageTemplateEntriesComponent } from './acmt-entries/acmt-entries.component';
import { AccountChangeMessageTemplateEntryDetailComponent } from './acmt-entry-detail/acmt-entry-detail.component';
import { AccountChangeMessageTemplateEntryUpdateComponent } from './acmt-entry-update/acmt-entry-update.component';
import { AccountChangeMessageTemplateEntryDeleteComponent } from './acmt-entry-delete/acmt-entry-delete.component';
import { AccountChangeMessageTemplateEntryDeleteAllComponent } from './acmt-entry-delete-all/acmt-entry-delete-all.component';

import { RouteConfigData } from './acmt-route-data';

const route : Routes = [

	{'path' : '' , 'component' : AccountChangeMessageTemplateHomepageComponent , 

		'children' : [

				{'path' : '' , 'component' : AccountChangeMessageTemplateDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

				{'path' : 'entry/create' , 'component' : AccountChangeMessageTemplateEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				{'path' : 'entries' , 'component' : AccountChangeMessageTemplateEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

				{'path' : 'entry/:entry/detail' , 'component' : AccountChangeMessageTemplateEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

				{'path' : 'entry/:entry/update' , 'component' : AccountChangeMessageTemplateEntryUpdateComponent , 'data' : {'update' : RouteConfigData.update } } ,

				{'path' : 'entry/:entry/delete' , 'component' : AccountChangeMessageTemplateEntryDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } } ,

				{'path' : 'entry/delete/all' , 'component' : AccountChangeMessageTemplateEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	]	} ,

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class AccountChangeMessageTemplateRoutingModule {

	constructor() {

		
	}


}