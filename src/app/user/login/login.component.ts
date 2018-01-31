import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'events-login',
  templateUrl: './login.component.html',
  styles : []
})
export class LoginComponent implements OnInit {
  loginInvalid : boolean = false;
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(formLogin) {
    this.authService.loginUser(formLogin.userName, formLogin.password)
      .subscribe( res => {
        if(!res) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['/events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
