import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule, MatCheckboxModule,
  MatMenuModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';

import { AppContentComponent } from './coordinator/app-content/app-content.component';
import { HomeComponent } from './coordinator/home/home.component';
import { AuthComponent } from './coordinator/auth/auth.component';
import { LoginComponent } from './coordinator/auth/login/login.component';
import { RegisterComponent } from './coordinator/auth/register/register.component';
import { EmployeeComponent } from './coordinator/app-content/employee/employee.component';
import { EeInfoFormComponent } from './coordinator/app-content/employee/ee-info-form/ee-info-form.component';
import { EeJobDetailComponent } from './coordinator/app-content/employee/ee-job-vacancy/ee-job-detail/ee-job-detail.component';
import { EeJobListComponent } from './coordinator/app-content/employee/ee-job-vacancy/ee-job-list/ee-job-list.component';
import { EePortfolioComponent } from './coordinator/app-content/employee/ee-portfolio/ee-portfolio.component';
import { EmployerComponent } from './coordinator/app-content/employer/employer.component';
import { EmInfoViewComponent } from './coordinator/app-content/employer/em-info-view/em-info-view.component';
import { UserSettingComponent } from './coordinator/app-content/user-setting/user-setting.component';
import { EePortfolioPreviewComponent } from './coordinator/app-content/employee/ee-portfolio/ee-portfolio-preview/ee-portfolio-preview.component';
import { EePortfolioEditComponent } from './coordinator/app-content/employee/ee-portfolio/ee-portfolio-edit/ee-portfolio-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EeInfoFormComponent,
    EeJobDetailComponent,
    EeJobListComponent,
    EePortfolioComponent,
    EmployerComponent,
    EmInfoViewComponent,
    UserSettingComponent,
    AppContentComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    EePortfolioPreviewComponent,
    EePortfolioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule,  MatButtonModule,
    MatRadioModule, MatCheckboxModule,  MatMenuModule,
    MatDatepickerModule, MatNativeDateModule, MatSelectModule, 
    MatSlideToggleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
