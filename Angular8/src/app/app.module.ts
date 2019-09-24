import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './material.module';

import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule  } from 'primeng/dataview';

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
import { CryptoListComponent } from './cryptos/crypto-list/crypto-list.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { RegisterComponent } from './register/register.component';

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
    SearchCustomersComponent,
    CryptoListComponent,
    MaterialDemoComponent,
    DialogBoxComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    // PrimeNG Modules
    ButtonModule,
    PanelModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    DataViewModule
  ],
  // For any component loaded into a dialog, you must include your component class in the list of entryComponents
  // in your NgModule definition so that the Angular compiler knows to create the ComponentFactory for it!
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [PersonService, EmployeeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
