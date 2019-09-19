import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  // baseUrl = 'http://localhost:8080/api';

  persons: Observable<any>;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPersonList()
      .subscribe(
        data => {
          console.log(data);
          this.persons = data;
        },
        err => {
          console.log(err);
        }
      );
  }

}
