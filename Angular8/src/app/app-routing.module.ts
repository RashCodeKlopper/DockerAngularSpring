import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PersonsComponent } from './persons/persons.component';
import { EmployeeListComponent } from './employees/employeelist/employeelist.component';
import { AddEmployeeComponent } from './employees/addemployee/add-employee.component';
import { EditEmployeeComponent } from './employees/editemployee/edit-employee.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'persons', component: PersonsComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'editEmployee/:id', component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
