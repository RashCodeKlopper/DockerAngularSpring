import { Injectable } from '@angular/core';
import { Employee } from '../employees/entity/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // In-memory list of employees
  allEmployees: Employee[] = [
    {
      id: '1',
      firstname: 'Rashied',
      lastname: 'Abdoelkariem',
      age: 26,
      designation: 'Software Engineer'
    }
  ];

  // Returns all the employees
  getAllEmployees(): Employee[]{
    return this.allEmployees;
  }

  // Adds an employee to employee list
  addEmployee(employee: Employee) {
    this.allEmployees.push(employee);
  }

  // Update employee details
  updateEmployee(employee: Employee){
    const updateEmployee = this.allEmployees.find(emp => emp.id === employee.id);
    updateEmployee.firstname = employee.firstname;
    updateEmployee.lastname = employee.lastname;
    updateEmployee.age = employee.age;
    updateEmployee.designation = employee.designation;
  }

  // Deletes an employee from employee list
  deleteEmployee(id: string) {
    this.allEmployees = this.allEmployees.filter(employee => employee.id !== id);
  }

  // Returns an employee with passed employee id from employee list
  getEmployee(id: string): Employee{
    return this.allEmployees.find(emp => emp.id === id);
  }
}
