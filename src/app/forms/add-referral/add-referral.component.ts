import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-add-referral',
  templateUrl: './add-referral.component.html',
  styleUrls: ['./add-referral.component.css']
})
export class AddReferralComponent {
  referral = new FormGroup({
    pesel: new FormControl(''),
    typeOfTest: new FormControl(''),
    date: new FormControl(''),
    doctorId: new FormControl('')
  });
  constructor(private data: DataService) { }

  onSubmit() {
    this.data.addReferral(this.referral.value);
    console.log('wysyla');
  }

}
