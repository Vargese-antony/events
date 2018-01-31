import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './errors/error-404/error-404.component';
import { 
  EventRouteActivatorService,
  EventListResolverService,
  EventDetailsResolverService
} from './events/index';


import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  EventService
} from './events/index';

const routes: Routes = [
  { path : 'events', component : EventsListComponent, resolve :  {eventsFromResolve : EventListResolverService} },
  { path : 'events/new', component : CreateEventComponent, canDeactivate : ['canDeactivateCreateEvent']},
  { path : 'events/:id', component : EventDetailsComponent, resolve :  {event : EventDetailsResolverService}},
  { path : 'events/session/create', component : CreateSessionComponent},
  { path : '404', component : Error404Component},
  { path : 'user', loadChildren : 'app/user/user.module#UserModule'},
  { path : '', redirectTo : 'events', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
