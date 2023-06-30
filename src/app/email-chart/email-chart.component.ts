import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-email-chart',
  templateUrl: './email-chart.component.html',
  styleUrls: ['./email-chart.component.scss']
})
export class EmailChartComponent implements OnInit {

  public chart: any;


  constructor() { }

  ngOnInit(): void {
    this.createEmailChart();
  }

  createEmailChart() {

    //let xValues = ["Email send", "Received"];
    let yValues = [35, 45];
    let barColors = [
      "#f9c732",
      "#303942"
    ];

    this.chart = new Chart("MyEmailChart", {
      type: "doughnut",
      data: {
        //labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins: {
            title: {
                display: true,
            }
        },
        rotation: -90,
        circumference: 180,
        aspectRatio: 1.5
    }
    });
  }


}
