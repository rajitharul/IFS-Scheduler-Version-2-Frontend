import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-leavehome',
  templateUrl: './leavehome.component.html',
  styleUrls: ['./leavehome.component.css']
})
export class LeavehomeComponent implements OnInit {
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  public doughnutChartLabels: Label[] = ['Done', 'Pending', 'Available'];
  public doughnutChartData: SingleDataSet = [10, 10, 10];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'] },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
