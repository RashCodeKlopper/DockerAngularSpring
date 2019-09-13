import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public getPersons(url: string): any {
    return this.http.get(url).pipe(map(response => {
      return response;
    }));
  }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

}
