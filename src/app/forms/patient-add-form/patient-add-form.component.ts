import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-patient-add-form',
  templateUrl: './patient-add-form.component.html',
  styleUrls: ['./patient-add-form.component.css']
})

export class PatientAddFormComponent {

  patient = new FormGroup({
    pesel: new FormControl(''),
    adres: new FormControl(''),
    nrUbezpieczenia: new FormControl(''),
    imie: new FormControl(''),
    nrTelefonu: new FormControl(''),
    nazwisko: new FormControl('')
  });
  constructor(private data: DataService) {
  }
  onSubmit() {
    this.data.addPatient(this.patient.value);
    alert('Dodano pacjenta');
    window.location.reload();
  }
}


