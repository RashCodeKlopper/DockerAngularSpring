import { Component, OnInit } from '@angular/core';
import { Owner } from '../../_interface/owner.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../../shared/repository.service';
import { ErrorHandlerService } from '../../shared/error-handler.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  public owner: Owner;
  public showAccounts;

  constructor(private repository: RepositoryService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.getOwnerDetails();
  }

  private getOwnerDetails = () => {
    const id: string = this.activeRoute.snapshot.params.id;
    // const apiUrl = `api/owner/${id}/account`;
    const apiUrl = `owners/${id}`;

    this.repository.getData(apiUrl)
      .subscribe(res => {
          this.owner = res as Owner;
        },
        (error) => {
          this.errorHandler.handleError(error);
        });
  }
}
