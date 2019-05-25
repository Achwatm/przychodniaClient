import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../classes/user';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  login = new FormGroup({
    pesel: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  });
    constructor(private data: DataService) { }

  onSubmit() {
      if (this.login.controls['role'].value === 'user' ) {
        console.log(this.login.value);
        this.data.login(this.login.value);
        console.log(sessionStorage.getItem('rola'));
      } else
        if (this.login.controls['role'].value === 'doctor') {
          console.log(this.login.value);
          this.data.doctorLogin(this.login.value);
          console.log(sessionStorage.getItem('rola'));
        }
      window.location.href = 'home';
  }

}
