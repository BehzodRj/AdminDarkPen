import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../all.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  authForm!: FormGroup

  constructor(private router: Router) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', (Validators.required, Validators.email)),
      password: new FormControl('', Validators.required)
    })

    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/admin'])
    }
  }

  logIn() {
    const authFormData = { ...this.authForm.value }
    let users: any = sessionStorage.getItem('users')
    let verifyUsers = JSON.parse(users).filter((res: any) => res.email == authFormData.email)[0]
    if (sessionStorage.getItem('users')) {
      if ( verifyUsers?.email == authFormData.email && verifyUsers?.password == authFormData.password ) {
        this.router.navigate(['/admin'])
        localStorage.setItem('access_token', verifyUsers.username)
      } else {
          alert('Лоигин или пароль не правильный')
      }
    } else {
        alert('Такого пользователя нет')
    }
  }

}
