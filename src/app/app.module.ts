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
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { AddToCardComponent } from './forms/add-to-card/add-to-card.component';
import { AddReferralComponent } from './forms/add-referral/add-referral.component';
import { ShowAppointmentsComponent } from './components/show-appointments/show-appointments.component';
import { MakeAppointmentComponent } from './forms/make-appointment/make-appointment.component';

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
    HomeComponent,
    PatientCardComponent,
    MyAccountComponent,
    AddToCardComponent,
    AddReferralComponent,
    ShowAppointmentsComponent,
    MakeAppointmentComponent
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
