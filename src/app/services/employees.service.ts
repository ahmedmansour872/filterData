import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private httpClient: HttpClient) {}
  getEmployees() {
    return this.httpClient.get(
      'https://63d2d9d006556a0fdd45c6f7.mockapi.io/employees/v1/employees'
    );
  }
}
