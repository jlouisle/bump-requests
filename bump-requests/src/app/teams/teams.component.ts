import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {
  teams: Object[];

  getTeams(): void {
    this.dataService.getTeams().subscribe(teams => this.teams = teams['data']);
  }

  ngOnInit() {
    this.getTeams();
  }
  
  constructor(private dataService: DataService) { }
}