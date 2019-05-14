import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {User} from '../../classes/user';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  signup = new FormGroup({
    pesel: new FormControl(''),
    password: new FormControl(''),
    rpassword: new FormControl(''),
  });
  constructor(private data: DataService) { }

  onSubmit() {
    if (this.signup.get('password').value === this.signup.get('rpassword').value) {
      this.data.addUser(this.signup.value);
      console.log('wyslano');
      window.location.href = 'log-in';
    } else {
      console.log('błąd');
      alert('hasła są różne');
    }
  }
}
