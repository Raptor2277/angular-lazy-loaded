import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "login/callback",
    component: OktaCallbackComponent,
  },

  {
    path: "identity-services",
    loadChildren: () => import("./modules/identity-services/identity-services.module").then(m => m.IdentityServicesModule)
  },
  {
    path: "dashboards",
    loadChildren: () => import("./modules/dashboards/dashboards.module").then(m => m.DashboardsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
