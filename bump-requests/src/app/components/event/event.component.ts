import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private id;
  private sub: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getEvent(this.id);
  }

  event: Object;

  // save(): void {
  //   this.dataService.updateTable(this.hero)
  //     .subscribe(() => this.goBack());
  // }

  getEvent(id): void {
    this.dataService.getSingle('events',id).subscribe(event_ => this.event = event_['data']);
  }

}