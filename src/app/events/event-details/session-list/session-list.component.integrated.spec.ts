import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SessionListComponent } from './session-list.component';
import { VoterService } from '../voter.service';
import { AuthService } from '../../../user/auth.service';
import { ISession } from '../../shared/event.model';
import { UpvoteComponent } from '../../../event-details/upvote/upvote.component';
import { CollapsibleWellComponent, DurationPipe } from '../../../common/index';

fdescribe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        debugElement: DebugElement,
        htmlElement: HTMLElement;

    beforeEach(async(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser : {
                id : 3,
                userName : 'John',
                firstName : 'John',
                lastName : 'papa'
            }

        };
        const mockVoterService = {};
        TestBed.configureTestingModule( {
            imports : [],
            declarations : [
                SessionListComponent,
                UpvoteComponent,
                CollapsibleWellComponent,
                DurationPipe
            ],
            providers : [
                { provide : AuthService , useValue : mockAuthService},
                { provide : VoterService , useValue : mockVoterService}
            ],
            schemas : []
        }).compileComponents();
    }));

    beforeEach( () => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        htmlElement = fixture.nativeElement;
    });

    describe('Initial Display', () => {
        it('should have the correct session title', () => {
            component.sessions = [
                {
                    id : 1, name : 'Session 1', duration : 1, abstract : 'Session 1 for test',
                    level : 'Beginner', presenter : 'John', voters : ['Joe', 'john']
                }
            ];
            component.filteredBy = 'all';
            component.sortBy = 'name';
            component.eventId = 2;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(htmlElement.querySelector('[well-title]').textContent).toContain('Session 1');
            /**
             * The below line does the same test, but using the DebugElement
             */
            expect( debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    });
});
