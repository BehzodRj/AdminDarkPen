import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  recentSalesData: any = []
  todoData: any = []
  chartWorldWideSales: any;
  chartSalesRevenue: any;
  labels: any = []
  data: any = []
  dateInline: any
  userData: any = localStorage.getItem('access_token')

  constructor(private router: Router, private request: RequestsService) { }

  ngOnInit() {
    setTimeout(() => {
      let spinner = document.getElementById('spinner')
      spinner?.classList.remove('show')
    }, 600);

    this.recentSalesData = this.request.reventCales()
    this.recentSalesData.forEach( (elem: any) => {
      this.labels.push(new Date(elem.date).getFullYear())
      this.data.push(elem.amount)
    })

    // World Wide Sales Chart
    this.chartWorldWideSales = new Chart('worldWideSales', {
      type: "bar",
      data: {
        labels: this.labels,
        datasets: [{
          label: "USA",
          data: this.data,
          backgroundColor: "rgba(235, 22, 22, .7)"
        },
        {
          label: "UK",
          data: this.data,
          backgroundColor: "rgba(235, 22, 22, .5)"
        },
        {
          label: "AU",
          data: this.data,
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
        labels: this.labels,
        datasets: [{
          label: "Salse",
          data: this.data,
          backgroundColor: "rgba(235, 22, 22, .7)",
          fill: true
        },
        {
          label: "Revenue",
          data: this.data,
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
