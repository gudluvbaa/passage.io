import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './coordinator/home/home.component';
import { AuthComponent } from './coordinator/auth/auth.component';
import { LoginComponent } from './coordinator/auth/login/login.component';
import { RegisterComponent } from './coordinator/auth/register/register.component';
import { AppContentComponent } from './coordinator/app-content/app-content.component';
import { EmployeeComponent } from './coordinator/app-content/employee/employee.component';
import { EmployerComponent } from './coordinator/app-content/employer/employer.component';
import { EmInfoViewComponent } from './coordinator/app-content/employer/em-info-view/em-info-view.component';
import { EePortfolioComponent } from './coordinator/app-content/employee/ee-portfolio/ee-portfolio.component';
import { EeInfoFormComponent } from './coordinator/app-content/employee/ee-info-form/ee-info-form.component';
import { EeJobListComponent } from './coordinator/app-content/employee/ee-job-vacancy/ee-job-list/ee-job-list.component';
import { EeJobDetailComponent } from './coordinator/app-content/employee/ee-job-vacancy/ee-job-detail/ee-job-detail.component';
import { UserSettingComponent } from './coordinator/app-content/user-setting/user-setting.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent, children: [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path:'register', component: RegisterComponent },
    { path:'login', component: LoginComponent }]
  },
  { path: 'app', component: AppContentComponent, children: [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    { path:'employee', component: EmployeeComponent, children: [
      { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
      { path:'portfolio', component: EePortfolioComponent },
      { path:'info', component: EeInfoFormComponent },
      { path:'vacancy-list', component: EeJobListComponent },
      { path:'vacancy-detail', component: EeJobDetailComponent }
    ]},
    { path:'employer', component: EmployerComponent, children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path:'info', component: EmInfoViewComponent }
    ]},
    { path:'user-setting', component: UserSettingComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
