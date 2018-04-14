import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  private dataUrl = 'http://localhost:5000/api/events/';  // URL to web api

  getEvents(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl);
  }

}
