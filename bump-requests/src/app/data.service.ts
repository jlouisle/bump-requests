import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getMultiple(table): Observable<Object[]> {
    let dataUrl = 'http://localhost:5000/api/'+table+'/';
    return this.http.get<Object[]>(dataUrl);
  }

  getSingle(table,id): Observable<Object[]> {
    let dataUrl = 'http://localhost:5000/api/'+table+'/'+id;
    return this.http.get<Object[]>(dataUrl);
  }
}