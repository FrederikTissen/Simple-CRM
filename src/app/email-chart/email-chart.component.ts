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

    let xValues = ["Email send", "Received"];
    let yValues = [35, 45];
    let barColors = [
      "#e8c3b9",
      "#1e7145"
    ];

    this.chart = new Chart("MyEmailChart", {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: 'Email activity'
            }
        }
    }
    });
  }


}
