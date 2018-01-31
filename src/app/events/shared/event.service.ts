import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { IEvent, ISession } from '../index';

@Injectable()
export class EventService {
  private url : string = 'http://localhost:4300';
  constructor(private _httpClient : HttpClient) { }

  getEvents() : Observable<IEvent[]>{
    return this._httpClient.get<IEvent[]>(this.url + '/api/events')
    .do( data => console.log('Success'))
    .catch(this.handleError);
  }

  getEvent(id:number) : Observable<IEvent> {
    return this._httpClient.get<IEvent>(this.url + '/api/events/' + id)
      .catch(this.handleError);
  }

  saveEvent(event : IEvent) : Observable<IEvent>{
    let reqHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this._httpClient.post( this.url + '/api/events',event, {headers : reqHeaders})
      .catch(this.handleError);
  }

  searchSessions(searchTerm : string) : Observable<ISession[]> {
    let reqParams = new HttpParams();
    reqParams = reqParams.set('search', searchTerm);
    return this._httpClient.get<ISession[]>( this.url + '/api/sessions/search', { params : reqParams })
      .catch(this.handleError);
  }

  handleError(error : HttpErrorResponse) {
    return Observable.throw(error.statusText);
  }
}
