import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//non angular imports
import { AppRoutingModule } from './app-routing.module';

//============================primeng======================
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';

//============================okta======================
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { RootComponent } from './components/root/root.component';

const oktaAuth = new OktaAuth({
  issuer: 'https://trial-4458022.okta.com/oauth2/default',
  clientId: '0oa74yds3jcxFC0jo697',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ["openid", "email", "profile"]
});


//https://trial-4458022.okta.com/oauth2/default/v1/authorize?client_id=0oa74yds3jcxFC0jo697&redirect_uri=http://localhost:8080/login/callback&scope=openid&response_type=code

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,

    ButtonModule,
    InputTextModule,
    MenubarModule,
    DialogModule,
    BreadcrumbModule,

    OktaAuthModule.forRoot({ oktaAuth }),
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
