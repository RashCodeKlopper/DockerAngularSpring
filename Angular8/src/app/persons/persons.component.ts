import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  baseUrl = 'http://localhost:8080';

  persons: any;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService
      .getPersons(this.baseUrl + '/persons')
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
