import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-doctor-add-form',
  templateUrl: './doctor-add-form.component.html',
  styleUrls: ['./doctor-add-form.component.css']
})

export class DoctorAddFormComponent {

  doctor = new FormGroup({
    doctorId: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    speciality: new FormControl(''),
    licenseNumber: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  constructor(private data: DataService) {
  }
  onSubmit() {
    this.data.addDoctor(this.doctor.value);
    alert('Dodano lekarza');
    window.location.reload();  }
}
