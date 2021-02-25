import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';
import { IsStudentGuard } from '../../../shared/guards/is-student.guard';

import { ProfileEntryUpdatePhotoHomepageComponent } from './profile-entry-update-photo-homepage/profile-entry-update-photo-homepage.component';
import { ProfileEntryUpdatePhotoComponent } from './profile-entry-update-photo/profile-entry-update-photo.component';

import { RouteConfigData } from './profile-entry-update-photo-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : ProfileEntryUpdatePhotoHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : ProfileEntryUpdatePhotoComponent , 'data' : {'photo' : RouteConfigData.photo } } ,

				]}
		]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEntryUpdatePhotoRoutingModule { }
