import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-show-appointments',
  templateUrl: './show-appointments.component.html',
  styleUrls: ['./show-appointments.component.css']
})
export class ShowAppointmentsComponent implements OnInit {
appointments: Object;
role: String;
  constructor(private data: DataService) { }

  ngOnInit() {
    if (sessionStorage.getItem('rola') === 'doctor') {
      this.data.getDoctorAppointments().subscribe(response =>
        this.appointments = response);
        console.log('doc');
    } else {
      this.data.getAppointments().subscribe(response =>
        this.appointments = response);
        console.log('cos');
    }
  }

}
