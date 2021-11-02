import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetuserrsService {
  totalusers:any;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
       return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map(res => res));
  }

  private extractData(res: Response) {
    let body = res;
    return body;
  }
}
