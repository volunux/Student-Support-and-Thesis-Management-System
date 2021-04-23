import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { DepartmentService } from './department.service';
import { DepartmentFormService } from './department-form.service';

import { DepartmentEntryDeleteAllComponent } from './department-entry-delete-all/department-entry-delete-all.component';
import { DepartmentEntryDeleteComponent } from './department-entry-delete/department-entry-delete.component';
import { DepartmentEntryUpdateComponent } from './department-entry-update/department-entry-update.component';
import { DepartmentEntryDetailComponent } from './department-entry-detail/department-entry-detail.component';
import { DepartmentEntryCreateComponent } from './department-entry-create/department-entry-create.component';
import { DepartmentHomepageComponent } from './department-homepage/department-homepage.component';
import { DepartmentDashboardComponent } from './department-dashboard/department-dashboard.component';
import { DepartmentEntryValidatorComponent } from './department-entry-validator/department-entry-validator.component';
import { DepartmentEntriesComponent } from './department-entries/department-entries.component';
import { DepartmentFormInputComponent } from './department-form-input/department-form-input.component';


@NgModule({

  declarations: [

  DepartmentEntryDeleteAllComponent,
  DepartmentEntryDeleteComponent,
  DepartmentEntryUpdateComponent,
  DepartmentEntryDetailComponent,
  DepartmentEntryCreateComponent,
  DepartmentHomepageComponent,
  DepartmentDashboardComponent,
  DepartmentEntryValidatorComponent,
  DepartmentEntriesComponent,
  DepartmentFormInputComponent

  ],
  
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    DepartmentFormService,
    DepartmentService
  ]

})

export class DepartmentModule { 

}
