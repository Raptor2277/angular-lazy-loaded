import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsPageComponent } from './pages/dashboards-page/dashboards-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    DashboardsPageComponent,
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,

    WidgetsModule,
  ]
})
export class DashboardsModule { }
