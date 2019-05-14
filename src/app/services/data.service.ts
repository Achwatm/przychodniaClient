import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../classes/patient';
import {User} from '../classes/user';

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
  login(user: User) {
    return this.http.post(this.url + '/login', user, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
       sessionStorage.setItem('rola', user.role );
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
}
