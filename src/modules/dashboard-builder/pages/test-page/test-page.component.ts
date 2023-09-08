import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GridStack, GridStackOptions, GridStackWidget } from 'gridstack';
import { GridstackComponent, GridstackItemComponent, NgGridStackOptions, NgGridStackWidget, nodesCB } from 'gridstack/dist/angular';
import { DDElement } from 'gridstack/dist/dd-element';

// sample grid options + items to load...


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit{

  ngOnInit(): void {
    console.log("ng on itnit");
    GridStack.setupDragIn(".grid-stack-item", { appendTo: 'body', helper: 'clone', });
  }


  public dashboardWidgets: GridStackWidget[] = [
    { x: 0, y: 0, minW: 2, id: '1' }, // must have unique id used for trackBy
    { x: 1, y: 0, id: '2' },
    { x: 0, y: 1, id: '3' },
  ];


  public identify = (index: number, w: GridStackWidget) => w.id;

  public gridOptions: GridStackOptions = {
    column: 6,
    cellHeight: "5rem",
    disableOneColumnMode: true,
    float: true,
    acceptWidgets: ".grid-stack-item",
    removable: '#trash',

    children: [
      { x: 0, y: 0, minW: 2, id: '1' }, // must have unique id used for trackBy
      { x: 1, y: 0, id: '2' },
      { x: 0, y: 1, id: '3' },
    ],

    margin: 5,
  }


  public addWidget() {
    this.dashboardWidgets = [{ w:1, h:1, id: Math.random().toString()}, ...this.dashboardWidgets];
  }

  public onChange(data: nodesCB) {
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }

}
