import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../shared/module/general-all/general-all.module';
import { UserOtherFieldModule } from '../../../shared/component/user-other-field/user-other-field.module';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { GeneralMessageTemplateModule } from '../../../shared/module/gmt/general-message-template.module';

import { AcrSendMailRoutingModule } from './acr-send-mail-routing.module';
import { AcrSendMailHomepageComponent } from './acr-send-mail-homepage/acr-send-mail-homepage.component';
import { AcrSendMailComponent } from './acr-send-mail/acr-send-mail.component';

import { AcrSendMailService } from './acr-send-mail.service';
import { AcrSendMailFormService } from './acr-send-mail-form.service';

@NgModule({

  declarations: [

  AcrSendMailHomepageComponent,
  AcrSendMailComponent

  ],
  
  imports: [
    CommonModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    UserOtherFieldModule,
    PipesModule,
    ReactiveFormsModule,
    AcrSendMailRoutingModule,
    GeneralMessageTemplateModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ,
  
  ],

  providers: [

    AcrSendMailService,
    AcrSendMailFormService
  ]

})
export class AcrSendMailModule { }
