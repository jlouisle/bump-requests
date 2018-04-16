import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RequestsComponent } from './requests/requests.component';
import { RequestComponent } from './request/request.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'request', component: RequestsComponent },
  { path: 'request/:id', component: RequestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})

export class AppRoutingModule {}