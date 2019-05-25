import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
patientCard: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPatientCard().subscribe(response =>
      this.patientCard = response);
  }

}
