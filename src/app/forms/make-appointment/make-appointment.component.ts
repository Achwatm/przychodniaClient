import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent {
 appointment = new FormGroup({
    doctorId: new FormControl(''),
    pesel: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
  });
  constructor(private data: DataService) { }
  onSubmit() {
    this.data.makeAppointment(this.appointment.value);
    console.log(this.appointment.value);
  }
}
