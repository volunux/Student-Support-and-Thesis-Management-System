import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { IsStudentGuard } from '../../shared/guards/is-student.guard';
import { EntryDeleteAllGuard } from '../../shared/guards/entry-delete-all.guard';
import { GeneralPaymentHomepageComponent } from './gp-homepage/gp-homepage.component';
import { GeneralPaymentDashboardComponent } from './gp-dashboard/gp-dashboard.component';
import { GeneralPaymentEntryDashboardComponent } from './gp-entry-dashboard/gp-entry-dashboard.component';
import { GeneralPaymentEntriesComponent } from './gp-entries/gp-entries.component';
import { GeneralPaymentEntryDetailComponent } from './gp-entry-detail/gp-entry-detail.component';
import { GeneralPaymentEntryCreateComponent } from './gp-entry-create/gp-entry-create.component';
import { GeneralPaymentEntryDeleteAllComponent } from './gp-entry-delete-all/gp-entry-delete-all.component';
import { GeneralPaymentEntryVerificationComponent } from './gp-entry-verification/gp-entry-verification.component';
import { GeneralPaymentEntryReceiptComponent } from './gp-entry-receipt/gp-entry-receipt.component';

import { RouteConfigData } from './gp-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : GeneralPaymentHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

			'canLoad' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : GeneralPaymentDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

					{'path' : 't/:payment' , 'component' : GeneralPaymentEntryDashboardComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } } ,

					{'path' : 't/:payment/entries' , 'component' : GeneralPaymentEntriesComponent , 'data' : {'entries' : RouteConfigData.entries } } ,

					{'path' : 't/:payment/entry/:entry/detail' , 'component' : GeneralPaymentEntryDetailComponent , 'data' : {'detail' : RouteConfigData.detail } } ,

					{'path' : 't/:payment/entry/create' , 'component' : GeneralPaymentEntryCreateComponent , 'canActivate' : [IsStudentGuard] , 'data' : {'create' : RouteConfigData.detail } } ,

					{'path' : 't/:payment/validation' , 'component' : GeneralPaymentEntryVerificationComponent , 'data' : {'validation' : RouteConfigData.validation } } ,

					{'path' : 'verify-status' , 'component' : GeneralPaymentEntryReceiptComponent , 'data' : {'verify' : RouteConfigData.verify } } ,

					{'path' : 'entry/delete/all' , 'component' : GeneralPaymentEntryDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } }

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class GeneralPaymentRoutingModule { 

}
