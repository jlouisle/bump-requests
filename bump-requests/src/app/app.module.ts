import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RequestComponent } from './request/request.component';
import { RequestsComponent } from './requests/requests.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';
import { AppComponent } from './app.component';

import { MessageService } from './message.service';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    RequestsComponent,
    MessagesComponent,
    RequestComponent,
    NavbarComponent,
    EventsComponent,
    EventComponent,
    TeamsComponent,
    TeamComponent,
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }