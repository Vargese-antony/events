import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(formLogin) {
    console.log(formLogin);
  }
}
