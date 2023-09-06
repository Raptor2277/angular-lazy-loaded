import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityServicesRoutingModule } from './identity-services-routing.module';
import { IdentityServicesPageComponent } from './identity-services-page/identity-services-page.component';
import { UserPageComponent } from './/user-page/user-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { HttpClientModule } from '@angular/common/http';
import { OktaApiServiceService } from './services/okta-api-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IdentityServicesPageComponent,
    UserPageComponent,
    GroupPageComponent

  ],
  imports: [
    CommonModule,
    IdentityServicesRoutingModule,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    OktaApiServiceService
  ]
})
export class IdentityServicesModule { }
