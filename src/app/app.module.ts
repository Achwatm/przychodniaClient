import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientAddFormComponent } from './forms/patient-add-form/patient-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { DoctorAddFormComponent } from './forms/doctor-add-form/doctor-add-form.component';
import { DoctorsComponent } from './doctors/doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientAddFormComponent,
    PatientsComponent,
    DoctorAddFormComponent,
    DoctorsComponent
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
