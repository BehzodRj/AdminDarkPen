import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  chartWorldWideSales: any;
  chartSalseRevenue: any;
  dateInline: any

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      let spinner = document.getElementById('spinner')
      spinner?.classList.remove('show')
    }, 600);

    // World Wide Sales Chart
    this.chartWorldWideSales = new Chart('worldWideSales', {
      type: "bar",
      data: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
          label: "USA",
          data: [15, 30, 55, 65, 60, 80, 95],
          backgroundColor: "rgba(235, 22, 22, .7)"
        },
        {
          label: "UK",
          data: [8, 35, 40, 60, 70, 55, 75],
          backgroundColor: "rgba(235, 22, 22, .5)"
        },
        {
          label: "AU",
          data: [12, 25, 45, 55, 65, 70, 60],
          backgroundColor: "rgba(235, 22, 22, .3)"
        }
        ]
      },
      options: {
        responsive: true
      }
    });

    // Salse Revenue Chart
    this.chartSalseRevenue = new Chart('salseRevenue', {
      type: "line",
      data: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
          label: "Salse",
          data: [15, 30, 55, 45, 70, 65, 85],
          backgroundColor: "rgba(235, 22, 22, .7)",
          fill: true
        },
        {
          label: "Revenue",
          data: [99, 135, 170, 130, 190, 180, 270],
          backgroundColor: "rgba(235, 22, 22, .5)",
          fill: true
        }
        ]
      },
      options: {
        responsive: true
      }
    });

  }


}
