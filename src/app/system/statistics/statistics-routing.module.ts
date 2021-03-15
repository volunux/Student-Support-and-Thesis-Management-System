import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { IsAdminGuard } from '../../shared/guards/is-admin.guard';
import { AccountStatusGuard } from '../../shared/guards/account-status.guard';

import { StatisticsEntriesComponent } from './statistics-entries/statistics-entries.component';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { RouteConfigData } from './statistics-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : StatisticsComponent ,

	'canActivate' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'canLoad' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

				'children' : [

					{'path' : '' , 'component' : StatisticsDashboardComponent } ,

					{'path' : 'entries/user-entries' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : RouteConfigData.userEntries } } ,

					{'path' : 'entries/user' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : RouteConfigData.user } } ,

					{'path' : 'entries/internal-one' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : RouteConfigData.internalOne } } ,

					{'path' : 'entries/internal-two' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : RouteConfigData.internalTwo } } ,

					{'path' : 'entries/internal-three' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : RouteConfigData.internalThree } } ,

					{'path' : 'entries/internal-four' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : RouteConfigData.internalFour } } ,

					{'path' : 'entries/other' , 'component' : StatisticsEntriesComponent , 'data' : {'entries' : RouteConfigData.other } }

				]}
	] 

}];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class StatisticsRoutingModule { 

}
