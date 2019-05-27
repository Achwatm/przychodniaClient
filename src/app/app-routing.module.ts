import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './components/patients/patients.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {SignUpFormComponent} from './forms/sign-up-form/sign-up-form.component';
import {HomeComponent} from './components/home/home.component';
import {PatientAddFormComponent} from './forms/patient-add-form/patient-add-form.component';
import {PatientCardComponent} from './components/patient-card/patient-card.component';
import {AddToCardComponent} from './forms/add-to-card/add-to-card.component';
import {AddReferralComponent} from './forms/add-referral/add-referral.component';
import {DoctorAddFormComponent} from './forms/doctor-add-form/doctor-add-form.component';
import {ShowAppointmentsComponent} from './components/show-appointments/show-appointments.component';
import {MakeAppointmentComponent} from './forms/make-appointment/make-appointment.component';

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
    path: 'doctorAdd',
    component: DoctorAddFormComponent
  },
  {
    path: 'showPatientCard/' + sessionStorage.getItem('pesel') ,
    component: PatientCardComponent
  },
  {
    path: 'addRegistry',
    component: AddToCardComponent
  },
  {
    path: 'addReferral',
    component: AddReferralComponent
  },
  {
    path: 'showAppointments',
    component: ShowAppointmentsComponent
  },
  {
    path: 'makeAppointment',
    component: MakeAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
