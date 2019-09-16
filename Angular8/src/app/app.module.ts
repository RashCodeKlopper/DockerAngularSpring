import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PersonsComponent } from './persons/persons.component';
import { AddEmployeeComponent } from './employees/addemployee/add-employee.component';
import { EditEmployeeComponent } from './employees/editemployee/edit-employee.component';
import { EmployeeDetailComponent } from './employees/employeedetail/employee-detail.component';
import { EmployeeListComponent } from './employees/employeelist/employeelist.component';

import { PersonService } from './services/person.service';
import { EmployeeService } from './services/employee.service';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    PersonsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // PrimeNG Modules
    ButtonModule,
    PanelModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    // Angular Material Modules
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [PersonService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
