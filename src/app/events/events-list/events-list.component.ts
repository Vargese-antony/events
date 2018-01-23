import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events : any;

  constructor( private eventService: EventService, private toastrService: ToastrService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['eventsFromResolve'];
  }
  handleClickEvent(eventName) {
    this.toastrService.success(eventName);
  }
}
