import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @Input("height") height!: string;

  constructor(){
    if(!this.height) this.height = "400px";
  }
}
