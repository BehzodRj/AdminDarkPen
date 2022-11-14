import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { E404PageComponent } from './e404-page/e404-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'signUp', component: RegistrationPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: '**', component: E404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
