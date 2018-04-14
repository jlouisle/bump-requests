import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events: Object[];

  getEvents(): void {
    this.dataService.getMultiple('events').subscribe(events => this.events = events['data']);
  }

  ngOnInit() {
    this.getEvents();
  }
  
  constructor(private dataService: DataService) { }
}