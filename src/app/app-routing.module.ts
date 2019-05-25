import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './components/patients/patients.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {SignUpFormComponent} from './forms/sign-up-form/sign-up-form.component';
import {HomeComponent} from './components/home/home.component';
import {PatientAddFormComponent} from './forms/patient-add-form/patient-add-form.component';
import {PatientCardComponent} from './components/patient-card/patient-card.component';

const routes: Routes = [
  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'registration',
    component: SignUpFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'patientAdd',
    component: PatientAddFormComponent
  },
  {
    path: 'showPatientCard/' + sessionStorage.getItem('pesel') ,
    component: PatientCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
