import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCardComponent {
  patientCard = new FormGroup({
    pesel: new FormControl(''),
    visit: new FormControl(''),
    recom: new FormControl(''),
    doctorId: new FormControl('')
  });
  constructor(private data: DataService) { }

  onSubmit() {
    this.data.addRegistry(this.patientCard.value);
    console.log('wysyla');
  }
}
