import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientAddFormComponent } from './forms/patient-add-form/patient-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './components/patients/patients.component';
import { DoctorAddFormComponent } from './forms/doctor-add-form/doctor-add-form.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpFormComponent } from './forms/sign-up-form/sign-up-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientAddFormComponent,
    PatientsComponent,
    DoctorAddFormComponent,
    DoctorsComponent,
    LogInComponent,
    SignUpFormComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
