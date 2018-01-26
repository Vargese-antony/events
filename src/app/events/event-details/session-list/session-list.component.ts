import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ISession } from '../../index';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions : ISession[];
  @Input() filteredBy : string;
  @Input() sortBy : string;

  filterdSessions : ISession[];

  constructor() { }

  ngOnInit() {
    console.log('Inside ngOnInit');
  }

  ngOnChanges(): void {
    console.log('Inside ngOnChanges');
    if( this.sessions ) {
      this.filterSessions(this.filteredBy);
      //Once filtered sort the sessions
      this.sortBy === 'name' ? this.filterdSessions.sort(this.sortSessionsByName) 
        : this.filterdSessions.sort(this.sortSessionsByVotes);
    }
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
