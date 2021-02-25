import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../../shared/guards/authentication.guard';
import { IsAdminGuard } from '../../shared/guards/is-admin.guard';
import { AccountStatusGuard } from '../../shared/guards/account-status.guard';
import { InternalDashboardComponent } from './internal-dashboard/internal-dashboard.component';
import { InternalComponent } from './internal/internal.component';

// Stage ID and Name must be given serious consideration

const routes : Routes = [

	{'path' : '' , 

	'component' : InternalComponent ,

	'canActivate' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'canLoad' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard , AccountStatusGuard , IsAdminGuard] ,

				'children' : [

					{'path' : '' , 'component' : InternalDashboardComponent } ,

/** Internal One **/

					{'path' : 'country' , 'loadChildren' : () => import('./internal-one/module/country/country.module').then(m => m.CountryModule) } ,

					{'path' : 'faculty' , 'loadChildren' : () => import('./internal-one/module/faculty/faculty.module').then(m => m.FacultyModule) } ,

					{'path' : 'level' , 'loadChildren' : () => import('./internal-one/module/level/level.module').then(m => m.LevelModule) } ,

					{'path' : 'payment-session' , 'loadChildren' : () => import('./internal-one/module/payment-session/payment-session.module').then(m => m.PaymentSessionModule) } ,

					{'path' : 'payment-type' , 'loadChildren' : () => import('./internal-one/module/payment-type/payment-type.module').then(m => m.PaymentTypeModule) } ,

					{'path' : 'refund-stage' , 'loadChildren' : () => import('./internal-one/module/refund-stage/refund-stage.module').then(m => m.RefundStageModule) } ,

					{'path' : 'unit' , 'loadChildren' : () => import('./internal-one/module/unit/unit.module').then(m => m.UnitModule) } ,

/** Internal One **/

/** Internal Two **/

					{'path' : 'general-request-status' , 'loadChildren' : () => import('./internal-two/module/general-request-status/general-request-status.module').then(m => m.GeneralRequestStatusModule) } ,

					{'path' : 'payment-status' , 'loadChildren' : () => import('./internal-two/module/payment-status/payment-status.module').then(m => m.PaymentStatusModule) } ,

					{'path' : 'general-status' , 'loadChildren' : () => import('./internal-two/module/status/status.module').then(m => m.StatusModule) } ,

					{'path' : 'user-role' , 'loadChildren' : () => import('./internal-two/module/user-role/user-role.module').then(m => m.UserRoleModule) } ,

					{'path' : 'user-status' , 'loadChildren' : () => import('./internal-two/module/user-status/user-status.module').then(m => m.UserStatusModule) } ,

/** Internal Two **/

/** Internal Three **/

					{'path' : 'general-request-comment' , 'loadChildren' : () => import('./internal-three/module/general-request-comment/general-request-comment.module').then(m => m.GeneralRequestCommentModule) } ,

					{'path' : 'refund-comment' , 'loadChildren' : () => import('./internal-three/module/refund-comment/refund-comment.module').then(m => m.RefundCommentModule) } ,

					{'path' : 'reply' , 'loadChildren' : () => import('./internal-three/module/reply/reply.module').then(m => m.ReplyModule) } ,

/** Internal Three **/

/** Internal Others **/

					{'path' : 'department' , 'loadChildren' : () => import('./commons/department/department.module').then(m => m.DepartmentModule) } ,

					{'path' : 'refund-signature' , 'loadChildren' : () => import('./commons/refund-signature/refund-signature.module').then(m => m.RefundSignatureModule) } ,

					{'path' : 'request-type' , 'loadChildren' : () => import('./commons/request-type/request-type.module').then(m => m.RequestTypeModule) } ,

					{'path' : 'request-credential' , 'loadChildren' : () => import('./commons/request-credential/request-credential.module').then(m => m.RequestCredentialModule) } ,

					{'path' : 'user' , 'loadChildren' : () => import('./commons/user/user.module').then(m => m.UserModule) } ,

					{'path' : 'user-upload' , 'loadChildren' : () => import('./internal-four/module/user-upload/user-upload.module').then(m => m.UserUploadModule) } ,

/** Internal Others **/

					// {'path' : 'upload' , 'loadChildren' : () => import('./upload/upload.module').then(m => m.UploadModule) } ,

					// {'path' : 'request-limit' , 'loadChildren' : () => import('./request-limit/request-limit.module').then(m => m.RequestLimitModule) } ,

				]}
	] 

}];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})
export class InternalRoutingModule { }
