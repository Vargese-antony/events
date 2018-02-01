import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../../user/auth.service';
import { VoterService, ISession } from '../../index';

fdescribe('SessionListComponent Isolated Tests', () => {
  let component: SessionListComponent;
  let mockAuthService : AuthService;
  let mockVoterService : VoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);    
  });
  
  it('should filter the sessions by intermediate', () => {
    component.sessions = <ISession[]>[
      {name: 'Session 1', level: 'beginner'},
      {name: 'Session 2', level: 'intermediate'},
      {name: 'Session 3', level: 'intermediate'}
    ];
    component.filteredBy = 'intermediate';
    component.sortBy = 'name';
    component.eventId = 2;

    component.ngOnChanges();

    expect(component.filterdSessions.length).toBe(2);
  });

  it('should sort the sessions by name', () => {
    component.sessions = <ISession[]>[
      {name: 'Session 1', level: 'beginner'},
      {name: 'Session 3', level: 'intermediate'},
      {name: 'Session 2', level: 'intermediate'}
    ];
    component.filteredBy = 'all';
    component.sortBy = 'name';
    component.eventId = 2;

    component.ngOnChanges();

    expect(component.filterdSessions[2].name).toBe('Session 3');
  });
});
