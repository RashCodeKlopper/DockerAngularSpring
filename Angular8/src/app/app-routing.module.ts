import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PersonsComponent } from './persons/persons.component';
import { EmployeeListComponent } from './employees/employeelist/employeelist.component';
import { AddEmployeeComponent } from './employees/addemployee/add-employee.component';
import { EditEmployeeComponent } from './employees/editemployee/edit-employee.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';
import { CryptoListComponent } from './cryptos/crypto-list/crypto-list.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'cryptos', component: CryptoListComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'find-customer', component: SearchCustomersComponent },
  { path: 'material-demo', component: MaterialDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
