import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { IsStudentGuard } from '../../shared/guards/is-student.guard';

import { RefundLetterHomepageComponent } from './refund-letter-homepage/refund-letter-homepage.component';
import { RefundLetterEntryCreateComponent } from './refund-letter-entry-create/refund-letter-entry-create.component';
import { RefundLetterEntryDetailComponent } from './refund-letter-entry-detail/refund-letter-entry-detail.component';


import { RouteConfigData } from './refund-letter-route-data';

const routes : Routes = [

	{'path' : '' ,

		'component' : RefundLetterHomepageComponent , 

		'canActivate' : [AuthenticationGuard] ,

		'canLoad' : [AuthenticationGuard] ,

		'canActivateChild' : [AuthenticationGuard] ,

		'children' : [

				{'path' : 'entry/:entry/write' , 'component' : RefundLetterEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } , 'canActivate' : [IsStudentGuard] } ,

				{'path' : 'entry/:entry/detail' , 'component' : RefundLetterEntryDetailComponent , 'data' : {'detail' : RouteConfigData.letter } } ,

	]	}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class RefundLetterRoutingModule { 

}
