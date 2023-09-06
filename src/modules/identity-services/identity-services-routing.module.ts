import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityServicesPageComponent } from './identity-services-page/identity-services-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { GroupPageComponent } from './group-page/group-page.component';

const routes: Routes = [
  { path: "", component: IdentityServicesPageComponent },
  { path: "user/:id", component: UserPageComponent },
  { path: "group/:id", component: GroupPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityServicesRoutingModule { }
