import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../index';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event : IEvent;
  addMode : boolean = false;
  filteredBy : string = 'all';
  sortBy : string = 'name';
  
  constructor(private eventService: EventService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.forEach( data => {
      this.event = data['event'];
      this.addMode = false;
    })
   //this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.paramMap.get('id'));
  }

  disableAddSession(flag : boolean) {
    this.addMode = !flag;
  }
  saveSession(session : ISession) {
    console.log(Math.max.apply([10,20,30, 5, 1, 3]));
    const maxId = Math.max.apply( null,this.event.sessions.map( s => s.id));

    //set the event id
    session.id = maxId+1;
    this.event.sessions.push(session); 
    this.eventService.saveEvent(this.event).subscribe( data => {
      //set the add mode to false
      this.addMode = false;
    });
  }
}
