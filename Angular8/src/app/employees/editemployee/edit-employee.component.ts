import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../entity/Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router/';

@Component({
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;

  // Services injected in constructor
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {
  }

  // Initializes variables
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.employee = this.employeeService.getEmployee(id);
  }

  // Method to update and employee
  updateEmployee() {
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(['employees']);
  }

  // Method to cancel update employee operation
  cancelEmployee() {
    this.router.navigate(['employees']);
  }
}
