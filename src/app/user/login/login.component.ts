import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'events-login',
  templateUrl: './login.component.html',
  styles : [`
    em { float : right; color : #E05C65; padding-left : 10px; }
  `]
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(formLogin) {
    this.authService.loginUser(formLogin.username, formLogin.password);

    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
