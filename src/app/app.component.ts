import { EmployeesService } from './services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Employees } from './interfaces/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularProject';
  employee: Employees[] = [];
  employeeOne: any[] = [];
  constructor(private employees: EmployeesService) {}

  ngOnInit() {
    this.employees.getEmployees().subscribe((data: any) => {
      this.employee = data;
    });
  }

  filter(name: string, salary: string, date: string, job: string, exp: string) {
    let changeDate: any = date.split('-');

    let year = changeDate[0];
    let day = changeDate[2];
    let manth = changeDate[1];

    changeDate = `${year}-${manth}-${day}`;

    let employee = {
      name: name,
      salary: salary,
      date: changeDate,
      department: job,
      experience: exp,
    };

    this.employee.forEach((e) => {
      if (
        e.name.toLowerCase().includes(employee.name.toLowerCase()) &&
        e.salary.includes(employee.salary) &&
        e.date.includes(employee.date) &&
        e.department.includes(employee.department) &&
        e.experience.includes(employee.experience)
      )
        this.employee = [employee];
    });
  }

  reseting() {
    this.ngOnInit();
  }
}
