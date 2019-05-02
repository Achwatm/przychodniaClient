import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './components/patients/patients.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {SignUpFormComponent} from './forms/sign-up-form/sign-up-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
