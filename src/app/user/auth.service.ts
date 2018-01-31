import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser : IUser;
  private url : string = 'http://localhost:4300';
  constructor(private _http : HttpClient) { }

  loginUser(userName: string, password : string) : Observable<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type','application/json');
    
    return this._http.post( this.url + '/api/login', 
      {username: userName,password: password}, 
      {headers : httpHeaders}
    ).do( (response : any) => {
      if(response) this.currentUser = response.user;
    })
    .catch(error => {
      console.error('Exception', error.statusText);
      return Observable.of(false) 
    });
  }

  logOut() :Observable<any>{
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type','application/json');
    
    return this._http.post(this.url + '/api/logout', {}, {headers : httpHeaders})
      .do( response => {
        this.currentUser = undefined;
      })
      .catch(this.handleError);
  }

  isAuthenticated() : boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName : string, lastName: string) : Observable<any> {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type','application/json');
    
    return this._http.put( this.url + `/api/users/${this.currentUser.id}`, 
      this.currentUser, 
      {headers : httpHeaders}
    ).catch(this.handleError);    
  }

  checkAuthenticationStatus() {
    this._http.get( this.url + '/api/currentIdentity')
      .map( (response:any) => {
        console.log('Response for /api/currentIdentity', response);
        if( response && response._body) {
          return response.json();
        } else {
          return {}
        }
      })
      .do( currentUser => {
        if(currentUser.userName) {
          this.currentUser = currentUser
        }
      })
      .subscribe();
  }

  handleError( error: HttpErrorResponse ) {
    return Observable.throw(error.statusText)
  }
}
