import { Component, OnInit } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.scss']
})
export class PieGraphComponent extends BaseChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          datasets: [
              {
                  data: [11, 16, 7, 3, 14],
                  backgroundColor: [
                      documentStyle.getPropertyValue('--red-500'),
                      documentStyle.getPropertyValue('--green-500'),
                      documentStyle.getPropertyValue('--yellow-500'),
                      documentStyle.getPropertyValue('--bluegray-500'),
                      documentStyle.getPropertyValue('--blue-500')
                  ],
                  label: 'My dataset'
              }
          ],
          labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
      };
      
      this.options = {
        maintainAspectRatio: false,
          plugins: {
              legend: {
                display: false,
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              r: {
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };
  }
}

