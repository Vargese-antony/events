import { Component, OnInit } from '@angular/core';
import { } from 'rxjs/'

import { AuthService } from '../user/auth.service';
import { EventService } from '../events/shared/event.service';
import { ISession } from '../events/index';

@Component({
  selector: 'events-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm : string;
  foundSessions : ISession[] = [];

  constructor(private authService : AuthService, private eventService : EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe( s => {
      this.foundSessions = s;
    });
  }
}
