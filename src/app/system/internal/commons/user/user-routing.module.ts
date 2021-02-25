import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'; 

import { EntryDeleteAllGuard } from '../../../../shared/guards/entry-delete-all.guard';

import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { AccountReactivateComponent } from './account-reactivate/account-reactivate.component';
import { UserDeleteAllComponent } from './user-delete-all/user-delete-all.component';


import { RouteConfigData } from './user-route-data';

const route : Routes = [

	{'path' : '' , 'component' : UserHomepageComponent ,

	'children' : [

	{'path' : '' , 'component' : UserDashboardComponent , 'data' : {'title' : 'User' , 'animation' : 'user'} } ,

	{'path' : 'entries' , 'component' : UserListComponent , 'data' : {'entries' : RouteConfigData.entries , 'link2' : false } } ,

	{'path' : 'entry/delete/all' , 'component' : UserDeleteAllComponent , 'canActivate' : [EntryDeleteAllGuard] , 'data' : {'deleteAll' : RouteConfigData.deleteAll } } ,

	{'path' : 'entry/create' , 'component' : UserCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

	{'path' : 'entry/:entry/detail' , 'component' : UserDetailComponent , 'data' : {'detail' : RouteConfigData.detail , 'link2' : false } } ,
	
	{'path' : 'entry/:entry/update' , 'component' : UserUpdateComponent , 'data' : {'update' : RouteConfigData.update , 'link2' : false } } ,

	{'path' : 'entry/:entry/delete' , 'component' : UserDeleteComponent , 'data' : {'delete' : RouteConfigData.delete } }	,

	{'path' : 'entry/:entry/reactivate' , 'component' : AccountReactivateComponent , 'data' : {'changes' : RouteConfigData.reactivate , 'link2' : false } },

	{'path' : 'entry/:entry/deactivate' , 'component' : AccountReactivateComponent , 'data' : {'changes' : RouteConfigData.deactivate , 'link2' : true } },

		] }

];

@NgModule({

	imports : [RouterModule.forChild(route)] ,

	exports : [RouterModule]

})

export class UserRoutingModule {

	constructor() {

		
	}


}