import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  registrationForm!: FormGroup
  usersData: any = []

  constructor(private router: Router) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', (Validators.required, Validators.email)),
      password: new FormControl('', Validators.required)
    })

    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/admin'])
    }

    if (sessionStorage.getItem('users')) {
      let seSionUser: any = sessionStorage.getItem('users')
      this.usersData = JSON.parse(seSionUser)
    } else {
      this.usersData = []
    }
  }

  signIn() {
    const registrationFormData = { ...this.registrationForm.value }
    this.usersData.push({ 'username': registrationFormData.username, 'email': registrationFormData.email, 'password': registrationFormData.password })
    sessionStorage.setItem('users', JSON.stringify(this.usersData))

    localStorage.setItem('access_token', registrationFormData.username)
    this.router.navigate(['/admin'])
  }

}
