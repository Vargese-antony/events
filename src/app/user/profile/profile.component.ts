import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { TOASTR_TOKEN, ToastrService } from '../../common/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styles : []
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup;
  firstName : FormControl;
  lastName : FormControl;
  constructor( private authService : AuthService, private router : Router, @Inject(TOASTR_TOKEN) private toasterService:ToastrService) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup( {
      firstName : this.firstName,
      lastName : this.lastName
    })
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe( res => {
        this.toasterService.success('Profile Saved Successfully');
        this.router.navigate(['/events']);
      });
  }
  cancel() {
    this.router.navigate(['/events']);
  }

  logOut() {
    this.authService.logOut()
      .subscribe( res => {
        this.router.navigate(['/user/login']);
      });
  }

  validateFirstName() {
    return (this.firstName.valid || this.firstName.untouched);
  }

  validateLastName() {
    return (this.lastName.valid || this.lastName.untouched);
  }
}
