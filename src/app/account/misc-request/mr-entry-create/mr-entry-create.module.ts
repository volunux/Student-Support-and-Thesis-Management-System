import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { RequestEntryCreateModule } from '../../../shared/component/request-entry-create/request-entry-create.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { RequestEntryFormInputModule } from '../../../shared/component/request-entry-form-input/request-entry-form-input.module';
import { MiscRequestEntryCreateRoutingModule } from './mr-entry-create-routing.module';

import { MiscRequestEntryCreateComponent } from './mr-entry-create/mr-entry-create.component';
import { MiscRequestEntryCreateHomepageComponent } from './mr-entry-create-homepage/mr-entry-create-homepage.component';

import { MiscRequestEntryCreateFormService } from './mr-entry-create-form.service';
import { MiscRequestEntryCreateService } from './mr-entry-create.service';


@NgModule({

  declarations: [

  MiscRequestEntryCreateComponent,
  MiscRequestEntryCreateHomepageComponent

  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MiscRequestEntryCreateRoutingModule,
    RequestEntryCreateModule,
    RequestEntryFormInputModule,
    GeneralModule
  ],

  providers : [

  	MiscRequestEntryCreateService,
  	MiscRequestEntryCreateFormService
  ]

})

export class MiscRequestEntryCreateModule { 

}
