import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { DashboardLayoutComponent } from './dashboard/layouts/dashboard-layout/dashboard-layout.component';
import { isNotAuthenticatedGuard, isAuthenticatedGuard } from './auth/guards';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [isNotAuthenticatedGuard],
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: '**', redirectTo: 'login' },
    ]
  },
  {
    path: 'dashboard',
    canActivate: [isAuthenticatedGuard],
    component: DashboardLayoutComponent
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];
