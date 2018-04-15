import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})

export class RequestsComponent implements OnInit {
  requests: Object[];

  getRequests(): void {
    this.dataService.getMultiple('requests').subscribe(requests => this.requests = requests['data']);
  }

  ngOnInit() {
    this.getRequests();
  }
  
  constructor(private dataService: DataService) { }
}