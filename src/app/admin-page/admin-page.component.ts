import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as $ from 'jquery'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  chartWorldWideSales: any;
  chartSalesRevenue: any;
  dateInline: any
  userData: any = localStorage.getItem('access_token')
  todoData: any = []

  constructor(private router: Router) { }

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
    this.chartSalesRevenue = new Chart('salesRevenue', {
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

  sideBarToggle() {
    document.getElementById("content")?.classList.toggle('open')
    document.getElementById("sidebar")?.classList.toggle('open')
  }

  addTodo(todoValue: any) {
    if (todoValue.value == '') {
      alert('Поля не может быть пустым')
    } else if (this.todoData.filter((res: any) => res.name == todoValue.value)[0]?.name == todoValue.value) {
      alert('Этот задача у вас есть')
    } else {
      this.todoData.push({ "name": todoValue.value, "status": false })
      todoValue.value = ''
    }

  }

  getcheck(event: any, name: number) {
    this.todoData.filter((res: any) => res.name == name)[0].status = event.target.checked
  }

  deleteTodo(status: boolean, id: number) {
    if (status == false) {
      alert('Поставьте галочку')
    } else {
      this.todoData.splice(id, 1)
    }
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

  backToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


}
