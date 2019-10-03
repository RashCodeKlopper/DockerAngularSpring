import { RepositoryService } from '../../shared/repository.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Owner } from '../../_interface/owner.model';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['id', 'name', 'dateOfBirth', 'address', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Owner>();

  private owners: Array<Owner> = [
    {id: 1, name: 'Rashied', address: 'Steentijdsingel 147', dateOfBirth: new Date()},
    {id: 2, name: 'Aziza', address: 'Odessastraat 16', dateOfBirth: new Date()},
    {id: 3, name: 'Jasmien', address: 'Broersvest 31 C', dateOfBirth: new Date()},
    {id: 4, name: 'Arvind', address: 'Tureluurlaan 45', dateOfBirth: new Date()},
  ];

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private repoService: RepositoryService,
              private errorService: ErrorHandlerService,
              private router: Router
  ) { }

  ngOnInit() {
    // Hardcoded list of owners
    // this.dataSource.data = this.owners;

    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllOwners = () => {
    const apiUrl = `owners`;

    this.repoService.getData(apiUrl)
      .subscribe(res => {
        this.dataSource.data = res as Owner[];
        },
        (error) => {
          this.errorService.handleError(error);
        });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
    const navUrl = `owner/details/${id}`;

    this.router.navigate([navUrl]).then();
  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {

  }

}
