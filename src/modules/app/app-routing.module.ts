import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("../home/home.module").then(m => m.HomeModule)
  },
  {
    path: "login/callback",
    component: OktaCallbackComponent,
  },

  {
    path: "identity-services",
    loadChildren: () => import("../identity-services/identity-services.module").then(m => m.IdentityServicesModule)
  },
  {
    path: "dashboards",
    loadChildren: () => import("../dashboards/dashboards.module").then(m => m.DashboardsModule)
  },
  {
    path: "dashboard-builder",
    loadChildren: () => import("../dashboard-builder/dashboard-builder.module").then(m => m.DashboardBuilderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
