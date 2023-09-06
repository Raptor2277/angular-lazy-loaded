import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from './components/widgets/bar-graph/bar-graph.component';
import { LineGraphComponent } from './components/widgets/line-graph/line-graph.component';
import { PieGraphComponent } from './components/widgets/pie-graph/pie-graph.component';
import { BaseChartComponent } from './components/widgets/base-chart/base-chart.component';
import { WidgetComponent } from './components/widget/widget.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    BarGraphComponent,
    LineGraphComponent,
    PieGraphComponent,
    BaseChartComponent,
    WidgetComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,

    ChartModule,
    CardModule,
  ],
  exports: [
    BarGraphComponent,
    LineGraphComponent,
    PieGraphComponent
  ]
})
export class WidgetsModule { }
