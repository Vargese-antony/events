import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {
	private url : string = 'http://localhost:4300';
	constructor( private _http : HttpClient) {}

	deleteVoter(eventId : number, session : ISession, voterName : string) : Observable<any> {
		//code to remove the voter from the session in the client side.
		session.voters = session.voters.filter( v => v !== voterName); 

		let deleteVoterUrl = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
		return this._http.delete(this.url + deleteVoterUrl)
			.catch(this.handleError);
	}

	addVoter(eventId : number, session : ISession, voterName : string) : Observable<ISession> {
		session.voters.push(voterName); //code to add the voter to the session in the client side

		let httpHeaders = new HttpHeaders();
		httpHeaders.set('Content-Type', 'application/json');
		let addVoterUrl = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
		return this._http.post( this.url + addVoterUrl, session, { headers:httpHeaders } )
			.catch(this.handleError);
	}

	userHasVoted(session : ISession, voterName : string) : boolean{
		return session.voters.some( v => v === voterName);
	}

	handleError( error : HttpErrorResponse) {
		return Observable.throw(error.statusText);
	}
}