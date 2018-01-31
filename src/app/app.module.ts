import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  EventService,
  EventRouteActivatorService,
  EventListResolverService,
  EventDetailsResolverService,
  UpvoteComponent,
  VoterService,
  ValidateLocation
} from './events/index';

declare let toastr : ToastrService;
declare let jQuery : any;
import { 
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
  DurationPipe,
  TOASTR_TOKEN, 
  ToastrService,
  JQUERY_TOKEN
} from './common/index';


import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './errors/error-404/error-404.component';

import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    ValidateLocation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EventService, 
    {
      provide : TOASTR_TOKEN,
      useValue : toastr
    },
    {
      provide : JQUERY_TOKEN,
      useValue : jQuery
    },  
    EventRouteActivatorService,
    {
      provide : 'canDeactivateCreateEvent',
      useValue : (component : CreateEventComponent) => {
        return component.canDeactivateCreateEvent();
      },
    },
    EventListResolverService,
    EventDetailsResolverService,
    //AuthService, (or below)
    {
      provide : AuthService, useClass : AuthService
    },
    VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
