import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
role: string;
  constructor() { }

  ngOnInit() {
    this.role = sessionStorage.getItem('rola');
  }
  logout() {
    sessionStorage.setItem('rola' , '');
    window.location.href = 'home';
  }

}
