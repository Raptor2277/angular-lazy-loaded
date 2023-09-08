import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardBuilderRoutingModule } from './dashboard-builder-routing.module';
import { TestPageComponent } from './pages/test-page/test-page.component';

import { GridstackModule } from 'gridstack/dist/angular';


@NgModule({
  declarations: [
    TestPageComponent
  ],
  imports: [
    CommonModule,
    DashboardBuilderRoutingModule,

    GridstackModule
  ]
})
export class DashboardBuilderModule { }
