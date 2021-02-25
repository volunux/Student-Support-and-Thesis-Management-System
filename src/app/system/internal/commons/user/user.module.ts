import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { SimplesModule } from '../../../../shared/module/simples/simples.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralModule } from '../../../../general/general.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { PipesModule } from '../../../../shared/pipes/pipes.module';
import { UserAccountModule } from '../../../../shared/user-account/user-account.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserDeleteAllComponent } from './user-delete-all/user-delete-all.component';


import { UserService } from './user.service';
import { AccountReactivateComponent } from './account-reactivate/account-reactivate.component';

import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [

  UserListComponent,
  UserDetailComponent,
  UserUpdateComponent,
  UserCreateComponent,
  UserDeleteComponent,
  UserDeleteAllComponent,
  AccountReactivateComponent,
  UserHomepageComponent,
  UserDashboardComponent,

  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralAllModule,
    SimplesModule,
    PipesModule,
    GeneralServicesModule,
    UserAccountModule,
    UserRoutingModule,
  ],
  
  providers : [

  UserService,

  ],

  exports : [

  ]

})

export class UserModule { 

}
