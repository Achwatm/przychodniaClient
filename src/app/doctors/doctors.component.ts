import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctor: Object;
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getDoctors().subscribe(response =>
      this.doctor = response);
  }
}
