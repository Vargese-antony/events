import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ISession } from '../../index';
import { VoterService } from '../voter.service';
import { AuthService } from '../../../user/auth.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filteredBy: string;
  @Input() sortBy: string;
  @Input() eventId : number;

  filterdSessions : ISession[];

  constructor( private authService: AuthService, private voterService : VoterService) { }

  ngOnInit() {
    console.log('Inside ngOnInit');
  }

  ngOnChanges(): void {
    if ( this.sessions ) {
      this.filterSessions(this.filteredBy);
      // Once filtered sort the sessions
      this.sortBy === 'name' ? this.filterdSessions.sort(this.sortSessionsByName)
        : this.filterdSessions.sort(this.sortSessionsByVotes);
    }
  }

  toggleVote(session: ISession) {
    console.log('Inside toggleVote');
    if(this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName).subscribe( v => {
        console.log('Voter deleted');
      });
    } else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName).subscribe( v => {
        console.log('Voter Added');
      });
    }
    //sort the voter list
    if( this.sortBy === 'votes') {
      this.filterdSessions.sort(this.sortSessionsByVotes);
    }
  }

  userHasVoted(session : ISession) : boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }

  sortSessionsByName( s1 : ISession, s2 : ISession ) : number {
    if( s1.name > s2.name ) return 1
    else if ( s1.name < s2.name ) return -1;
    
    return 0;
  }

  sortSessionsByVotes( s1 : ISession, s2 : ISession ) : number {
    return s2.voters.length - s1.voters.length;
  }

  filterSessions(filter) {
    if( filter === 'all') {
      this.filterdSessions = this.sessions.slice(0);
    } else {
      this.filterdSessions = this.sessions.filter( s => s.level.toLocaleLowerCase() === filter );
    }
  }
}
