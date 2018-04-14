import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Object[]> {
    let dataUrl = 'http://localhost:5000/api/events/';
    return this.http.get<Object[]>(dataUrl);
  }

  getEvent(id): Observable<Object[]> {
    let dataUrl = 'http://localhost:5000/api/events/' + id;
    console.log(dataUrl);
    return this.http.get<Object[]>(dataUrl);
  }

  getTeams(): Observable<Object[]> {
    let dataUrl = 'http://localhost:5000/api/teams/';
    return this.http.get<Object[]>(dataUrl);
  }

  getTeam(id): Observable<Object[]> {
    let dataUrl = 'http://localhost:5000/api/teams/' + id;
    console.log(dataUrl);
    return this.http.get<Object[]>(dataUrl);
  }

}