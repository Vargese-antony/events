import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventListResolverService implements Resolve<any>{
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvents().map( eventsMap => eventsMap );
  }

  constructor( private eventService : EventService) { }

}
