import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.scss']
})
export class BaseChartComponent {

  @Input("height") height!: string;

  constructor(){
    if(!this.height) this.height = "400px";
  }
}
