import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';

@Component({
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {

  firstname: string;
  lastname: string;
  age: number;
  designation: string;
  employee: Employee;

  // Services injected in constructor
  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  // Method to save an employee
  saveEmployee() {
    this.employee = new Employee(this.makeRandomID(), this.firstname, this.lastname, this.age, this.designation);
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(['employees']);
  }

  // Method to cancel the add operation
  cancelEmployee() {
    this.router.navigate(['employees']);
  }

  // Creates random id for employee
  makeRandomID(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
