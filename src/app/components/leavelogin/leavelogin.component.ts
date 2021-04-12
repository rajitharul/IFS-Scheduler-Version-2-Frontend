import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-leavelogin',
  templateUrl: './leavelogin.component.html',
  styleUrls: ['./leavelogin.component.css']
})
export class LeaveloginComponent implements OnInit {
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [12, 9, 8, 10, 6, 15, 10, 6, 15, 9, 2, 14], label: 'Casual Leave' },
    { data: [8, 4, 12, 10, 6, 7, 9, 2, 6, 3, 10, 5], label: 'Sick leave' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor() { }

  ngOnInit(): void {
  }

}
