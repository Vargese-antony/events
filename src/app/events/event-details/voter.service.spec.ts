import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable } from 'rxjs/Observable';

describe('VoterService', () => {
	let voterService : VoterService, httpMock;

	beforeEach(() => {
		httpMock = jasmine.createSpyObj('httpMock',['delete','post']);
		voterService = new VoterService(httpMock);
	});
	
	it('Delete a voter from list', () => {
		var session = { voters:['joe', 'john'] };
		httpMock.delete.and.returnValue(Observable.of(true));
		voterService.deleteVoter(5, <ISession>session, 'joe');

		expect(session.voters.length).toBe(1);
		expect(session.voters[0]).toBe('john');
	});
	
	it('should call the http.delete method with correct url', () => {
		var session = { id: 2, voters:['joe', 'john'] };
		httpMock.delete.and.returnValue(Observable.of(true));
		voterService.deleteVoter(3, <ISession>session, 'joe');

		expect(httpMock.delete).toHaveBeenCalledWith('http://localhost:4300/api/events/3/sessions/2/voters/joe');
	});

	it('should call the http.post method with correct url', () => {
		var session = { id: 2, voters:['john'] };
		httpMock.post.and.returnValue(Observable.of(true));
		voterService.addVoter(3, <ISession>session, 'joe');

		expect(httpMock.post).toHaveBeenCalledWith('http://localhost:4300/api/events/3/sessions/2/voters/joe', jasmine.any(Object), jasmine.any(Object));
	});
});