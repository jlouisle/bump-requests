import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { RegisterComponent } from './components/register/register.component';
import { RequestsComponent } from './components/requests/requests.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RequestComponent } from './components/request/request.component';
import { StatusComponent } from './components/status/status.component';
import { EventsComponent } from './components/events/events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { EventComponent } from './components/event/event.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MessageService } from './services/message.service';
import { LoginRedirect } from './services/login-redirect.service';
import { TeamComponent } from './components/team/team.component';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { CreateRequestComponent } from './components/create-request/create-request.component';

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
    LoginComponent,
    RegisterComponent,
    StatusComponent,
    CreateRequestComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [DataService, MessageService, AuthService, LoginRedirect, EnsureAuthenticated],
  bootstrap: [AppComponent]
})
export class AppModule { }