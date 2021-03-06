import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getMultiple(table): Observable<Object[]> {
    this.messageService.add('DataService: fetched multiple  '  + table);
    let dataUrl = 'http://localhost:5000/api/'+table+'/';
    return this.http.get<Object[]>(dataUrl);
  }

  getSingle(table,id): Observable<Object[]> {
    this.messageService.add('DataService: fetched single  ' + table);
    let dataUrl = 'http://localhost:5000/api/'+table+'/'+id;
    return this.http.get<Object[]>(dataUrl);
  }

  // updateSingle (single: Object): Observable<any> {
  //   let url = "";
  //   return this.http.put(url, single, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }
  
}