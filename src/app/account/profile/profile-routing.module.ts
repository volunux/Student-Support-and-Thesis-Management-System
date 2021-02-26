import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { IsAdminGuard } from '../../shared/guards/is-admin.guard';

import { ProfileHomepageComponent } from './profile-homepage/profile-homepage.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileDeactivateComponent } from './profile-deactivate/profile-deactivate.component';
import { ProfileReactivateComponent } from './profile-reactivate/profile-reactivate.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { ProfileEntryTypeDashboardComponent } from './profile-entry-type-dashboard/profile-entry-type-dashboard.component';

const routes: Routes = [

	{'path' : '' ,

		'component' : ProfileHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

						{'path' : '' , 'component' : ProfileDashboardComponent } ,

						{ 'path' : 'entry-type' , 'component' : ProfileEntryTypeDashboardComponent , 'canActivate' : [IsAdminGuard] , } ,

						{ 'path' : 'update-signature' , 'loadChildren' : () => import('./p-entry-update-s/p-entry-update-s.module').then(m => m.ProfileEntryUpdateSignatureModule) } ,

						{ 'path' : 'update-photo' , 'loadChildren' : () => import('./profile-entry-update-photo/profile-entry-update-photo.module').then(m => m.ProfileEntryUpdatePhotoModule) } ,

						{ 'path' : 'change-password' , 'component' : ChangePasswordComponent } ,

						{ 'path' : 'update' , 'component' : ProfileUpdateComponent } ,

						{ 'path' : 'detail' , 'component' : ProfileDetailComponent } ,

						{ 'path' : 'deactivate' , 'component' : ProfileDeactivateComponent } ,

						{ 'path' : 'reactivate' , 'component' : ProfileReactivateComponent } ,

				]}
		]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class ProfileRoutingModule { }
