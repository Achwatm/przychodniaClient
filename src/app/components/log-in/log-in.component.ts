import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  login = new FormGroup({
    pesel: new FormControl(''),
    password: new FormControl('')
  });
    constructor() { }

  ngOnInit() {
  }

}
