import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public chart: any;
 
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyLineChart", {
      type: 'line', 
      data: {
        labels: ['January', 'February', 'March','April',
								 'Mai', 'June', 'Juli', ], 
	       datasets: [
          {
            label: "2022",
            data: ['80465','127540', '57540', '100540', '99382',
								 '110443', '99045',],
            backgroundColor: '#303942'
          },
          {
            label: "2023",
            data: ['100465','137540', '95540', '90540', '120382',
								 '120443', '79045',],
            backgroundColor: '#f9c732'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }
}
