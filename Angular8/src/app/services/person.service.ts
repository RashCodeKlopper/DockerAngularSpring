import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getPersonList(): Observable<any> {
    return this.http.get(this.baseUrl + '/persons');
  }

/*  public getPersons(url: string): any {
    return this.http.get(url).pipe(map(response => {
      return response;
    }));
  }*/

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

}
