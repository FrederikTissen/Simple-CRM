import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  constructor(private dialog: MatDialog) { }

  /*openHorizontalBarChart() {
    const dialogRef = this.dialog.open(BarChartComponent, {
      width: '1100px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    });
  }*/


}
