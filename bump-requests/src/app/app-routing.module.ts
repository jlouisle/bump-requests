import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateRequestComponent } from './components/create-request/create-request.component';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestComponent } from './components/request/request.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginRedirect] },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'events', component: EventsComponent, canActivate: [EnsureAuthenticated]},
  { path: 'event/:id', component: EventComponent, canActivate: [EnsureAuthenticated]},
  { path: 'teams', component: TeamsComponent, canActivate: [EnsureAuthenticated]},
  { path: 'team/:id', component: TeamComponent, canActivate: [EnsureAuthenticated]},
  { path: 'request', component: RequestsComponent, canActivate: [EnsureAuthenticated]},
  { path: 'request/:id', component: RequestComponent, canActivate: [EnsureAuthenticated]},

  { path: 'create_request', component: CreateRequestComponent, canActivate: [EnsureAuthenticated]},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}