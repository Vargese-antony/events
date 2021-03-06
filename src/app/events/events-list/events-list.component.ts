import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';
import { IEvent } from '../index';

import { TOASTR_TOKEN, ToastrService } from '../../common/toastr.service';

@Component({
  templateUrl: './events-list.component.html',
  styles: []
})
export class EventsListComponent implements OnInit {
  events : IEvent[];

  constructor( private eventService: EventService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['eventsFromResolve'];
  }
}
