import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
   patient: Object;
   constructor(private data: DataService) {
  }

  ngOnInit() {
     this.data.getPatients().subscribe(response =>
      this.patient = response);
  }
}
