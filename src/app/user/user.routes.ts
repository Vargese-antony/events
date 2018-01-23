import { Route } from '@angular/router'
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

export const userRoutes : Route[] = [
	{ path : 'profile', component : ProfileComponent},
	{ path : 'login', component : LoginComponent } 
];