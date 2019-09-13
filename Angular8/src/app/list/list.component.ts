import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  brews: any;

  constructor(private httpService: PersonService) { }

  ngOnInit() {
    this.httpService.getBeer().subscribe(data => {
        this.brews = data;
        console.log(this.brews);
      }
    );
  }

}
