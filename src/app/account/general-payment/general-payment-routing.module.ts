import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { IsStudentGuard } from '../../shared/guards/is-student.guard';
import { EntryDeleteAllGuard } from '../../shared/guards/entry-delete-all.guard';
import { GeneralPaymentHomepageComponent } from './general-payment-homepage/general-payment-homepage.component';
import { GeneralPaymentDashboardComponent } from './general-payment-dashboard/general-payment-dashboard.component';
import { GeneralPaymentEntryDashboardComponent } from './general-payment-entry-dashboard/general-payment-entry-dashboard.component';
import { GeneralPaymentEntriesComponent } from './general-payment-entries/general-payment-entries.component';
import { GeneralPaymentEntryDetailComponent } from './general-payment-entry-detail/general-payment-entry-detail.component';
import { GeneralPaymentEntryCreateComponent } from './general-payment-entry-create/general-payment-entry-create.component';
import { GeneralPaymentEntryDeleteAllComponent } from './general-payment-entry-delete-all/general-payment-entry-delete-all.component';
import { GeneralPaymentEntryVerificationComponent } from './general-payment-entry-verification/general-payment-entry-verification.component';
import { GeneralPaymentEntryReceiptComponent } from './general-payment-entry-receipt/general-payment-entry-receipt.component';

import { RouteConfigData } from './general-payment-route-data';

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
