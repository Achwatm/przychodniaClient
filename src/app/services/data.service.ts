import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../classes/patient';
import {User} from '../classes/user';
import {Card} from '../classes/card';
import {Referral} from '../classes/referral';
import {Appointment} from '../classes/appointment';

@Injectable({providedIn: 'root'})
export class DataService {

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  public Patient: Object;
  private url = 'http://localhost:8888';
  constructor(private http: HttpClient) {
  }

  getPatients() {
    return this.http.get(this.url + '/showPatients');
  }

  addPatient(patient: Patient) {
    return this.http.post(this.url + '/addPatient', patient, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
  getDoctors() {
    return this.http.get(this.url + '/showDoctors');
  }

  addDoctor(patient: Patient) {
    return this.http.post(this.url + '/addDoctor', patient, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
  addUser(user: User) {
    return this.http.post(this.url + '/addUser', user, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
  addRegistry(card: Card) {
    return this.http.post(this.url + '/addRegistry', card, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
  addReferral(referral: Referral) {
    return this.http.post(this.url + '/addReferral', referral, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
  login(user: User) {
    return this.http.post(this.url + '/login', user, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
       sessionStorage.setItem('rola', user.role );
        sessionStorage.setItem('pesel', user.pesel.toString() );
      },
      response => {
        console.log('POST call in error', response);
        alert('Błąd logowania, sprawdź dane logowania');
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
  doctorLogin(user: User) {
    return this.http.post(this.url + '/doctorLogin', user, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
        sessionStorage.setItem('rola', user.role );
        sessionStorage.setItem('pesel', user.pesel.toString() );
      },
      response => {
        console.log('POST call in error', response);
        alert('Błąd logowania, sprawdź dane logowania');
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
  receptionistLogin(user: User) {
    return this.http.post(this.url + '/receptionistLogin', user, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
        sessionStorage.setItem('rola', user.role );
        sessionStorage.setItem('pesel', user.pesel.toString() );
      },
      response => {
        console.log('POST call in error', response);
        alert('Błąd logowania, sprawdź dane logowania');
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
  getPatientCard() {
    return this.http.get(this.url + '/showPatientCard/' + sessionStorage.getItem('pesel'));
  }
  getAppointments() {
    return this.http.get(this.url + '/showAppointments');
  }
  getDoctorAppointments() {
    return this.http.get(this.url + '/showAppointments/' + sessionStorage.getItem('pesel'));
  }
  makeAppointment(appointment: Appointment) {
    return this.http.post(this.url + '/makeAppointment', appointment, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
}
