import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
role: string;
  pesel: string;

  constructor() { }

  ngOnInit() {
    this.role = sessionStorage.getItem('rola');
    this.pesel = sessionStorage.getItem('pesel');
    console.log(this.pesel);
  }
  logout() {
    sessionStorage.setItem('rola' , '');
    window.location.href = 'home';
  }

}
